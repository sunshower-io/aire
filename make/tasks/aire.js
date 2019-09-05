const through = require('through2'),
    path = require('path'),
    typescript = require('typescript'),
    File = require('vinyl'),
    fs = require('fs');


class Plugin {


    constructor(category) {
        this.category = category;
    }
}


class PluginManager {


    constructor() {
        this.plugins = {};
        this.initializers = {};
    }

    apply(fctx, ctx, assets) {
        let plugins = this.plugins,
            category = plugins[fctx.extension];
        if (category && category.length) {
            for (let plugin of category) {
                plugin.apply(fctx, ctx, assets);
            }
        }
    }


    register(plugin) {
        let plugins = this.plugins,
            category = plugins[plugin.category];
        if (category) {
            category.push(plugin);
        } else {
            plugins[plugin.category] = [plugin];
        }
    }

    registerInitializer(ext, initializer) {
        if (!this.initializers[ext]) {
            this.initializers[ext] = initializer;
        }
    }


    initialize(finfo, assets) {
        let init = this.initializers[finfo.extension];

        if (init) {
            return init.apply(finfo, assets);
        }
    }
}


class TypescriptInitializer {
    apply(finfo, assets) {
        let path = finfo.realFile.path;
        if (fs.existsSync(path)) {
            let source = fs.readFileSync(path, 'utf8'),
                sfile = typescript.createSourceFile(
                    path,
                    source,
                    typescript.ScriptTarget.Latest,
                    true
                );
            return sfile;
        }
    }
}


class TypescriptPlugin extends Plugin {
    constructor(accepts) {
        super('.ts');
        this.accepts = accepts;
    }

    apply(fctx, ctx, assets) {
        let accepts = this.accepts,
            self = this,
            visit = self.visit;

        function doVisit(node) {
            if (node.kind === accepts) {
                visit.call(self, node, fctx, assets, ctx);
            }
        }

        typescript.forEachChild(ctx, doVisit);
    }


}


class ClassExtractorPlugin extends TypescriptPlugin {

    constructor() {
        super(typescript.SyntaxKind.ClassDeclaration);
        let customElementHandler = (cl, node, expr) => {
            cl['component'] = true;
            cl['tag-name'] = expr.arguments[0].text;
        };
        this.decoratorHandlers = {
            'customElement': customElementHandler
        };


        let bindableHandler = (cl, node, assets) => {
            let descriptor = assets.currentDescriptor;
            let type = typescript.SyntaxKind[node.type.kind],
                actual = type.replace("Keyword", "").toLowerCase();
            let doclet = node.jsDoc;

            let comments = [];

            if (doclet) {
                for (let i in Object.keys(doclet)) {
                    let doc = doclet[i];
                    if (doc && doc.comment) {
                        comments.push(doc.comment);
                    }
                }
            }
            descriptor.properties.push({
                name: node.name.escapedText,
                type: actual,
                comments: comments.join('\n')
            });
        };

        this.fieldDecoratorHandlers = {
            'bindable': bindableHandler
        }

    }

    visit(node, fctx, assets, ctx) {
        assets.classes = assets.classes || [];
        let cl = {
                base: fctx.base,
                name: node.name.escapedText,
            },
            descriptor = {
                properties: []
            };

        assets.currentDescriptor = descriptor;
        this.extractDecorators(cl, node, assets);
        this.extractAttributes(cl, node, assets);

        if (node.jsDoc) {
            let doclet = node.jsDoc,
                comments = [];
            for (let k in Object.keys(doclet)) {
                if (doclet[k].tags) {
                    let tags = doclet[k].tags;
                    for (let tag in tags) {
                        this.handleTag(tags[tag], cl, descriptor);

                    }
                }
                comments.push(doclet[k].comment);
            }
            assets.currentDescriptor.comments = comments.join('\n');
        }
        assets.classes.push(cl);
    }

    handleTag(tag, cl, descriptor) {
        let tn = tag && tag.tagName,
            name = tn && tn.escapedText;


        if (name === 'group') {
            cl.group = tag.comment;
        }
        if (name === 'groupIcon') {
            cl['group-icon'] = tag.comment;
        }
        if (name === 'icon') {
            cl['icon'] = tag.comment;
        }
    }


    extractAttributes(cl, node, assets) {

        let handlers = this.fieldDecoratorHandlers;

        function doExtract(n) {
            if (n.kind === typescript.SyntaxKind.PropertyDeclaration) {
                if (n.decorators) {
                    for (let decorator of n.decorators) {
                        let expr = decorator.expression,
                            escapedText = expr.escapedText;
                        if (escapedText) {
                            let dec = handlers[escapedText];
                            if (dec) {
                                dec(cl, n, assets);
                            }
                        }

                    }
                }
            }
        }

        typescript.forEachChild(node, doExtract);
    }


    extractDecorators(cl, node) {


        if (node.decorators) {
            for (let decorator of node.decorators) {
                let expr = decorator && decorator.expression,
                    actualExpression = expr && expr.expression;
                if (actualExpression) {
                    let handler = this.decoratorHandlers[actualExpression.escapedText];
                    if (handler) {
                        handler(cl, node, expr);
                    }
                }
            }
        }
    }
}

function generateDocumentation() {
    const assets = {},
        manager = new PluginManager();

    manager.register(new ClassExtractorPlugin());
    manager.registerInitializer('.ts', new TypescriptInitializer());
    return through.obj(function (file, inc, cb) {
        let directory = path.dirname(file.path),
            parsed = path.parse(file.path),
            base = parsed.name,
            extension = parsed.ext,
            relative = directory.substring(file.base.length + 1),
            fcontext = {
                out: this,
                realFile: file,
                directory: directory,
                base: base,
                extension: extension,
                relativePath: relative
            };

        let ctx = manager.initialize(fcontext, assets);
        manager.apply(fcontext, ctx, assets);

        generateGroups(assets);
        writeAssets(this, fcontext, assets);
        writeDescriptor(this, fcontext, assets);


        cb();
    });

}

function generateGroups(assets) {
    let groups = assets.classes.reduce((acc, v, idx) => {
        let cv = v['group'];
        if (cv) {
            let g = acc.find(t => t.name === cv);
            if (!g) {
                acc.push({
                    name: cv,
                    icon: v['group-icon'],
                    components: [{
                        base: v.base,
                        icon: v.icon,
                        name: v.name,
                        'tag-name': v['tag-name'],
                        component: v.component
                    }]
                })
            } else {
                g.components.push({
                    base: v.base,
                    name: v.name,
                    icon: v.icon,
                    'tag-name': v['tag-name'],
                    component: v.component
                });
            }

            delete v['group'];
            delete v['group-icon'];
        }
        assets.classes.splice(idx);
        return acc;

    }, []);

    if (groups.length) {
        if (assets.groups) {
            for (let group of groups) {
                let existingGroup = assets
                    .groups
                    .find(t => t.name === group.name);
                if (!existingGroup) {
                    assets.groups.push(group);
                } else {
                    existingGroup.components =
                        existingGroup
                            .components
                            .concat(group.components);
                }
            }

        } else {
            assets.groups = groups;
        }
    }

}


function writeDescriptor(all, fcontext, assets) {
    let rel = fcontext.relativePath,
        target = path.dirname(rel);
    let output = new File({
            path: path.join(target, fcontext.base + '.json')
        }),
        descriptor = assets && assets.currentDescriptor;

    if (descriptor) {
        output.contents = Buffer.from(JSON.stringify(descriptor));
        all.push(output);
        delete assets['currentDescriptor'];
    }
}

function writeAssets(all, fcontext, assets) {
    let output = new File({
        path: fcontext.realFile.cwd + '/assets.json'
    });
    output.contents = Buffer.from(JSON.stringify(assets));
    all.push(output);

}

module.exports = {
    generateDocumentation: generateDocumentation
};

