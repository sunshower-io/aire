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


class ModuleFunctionExtractorPlugin extends TypescriptPlugin {
    constructor() {
        super(typescript.SyntaxKind.ModuleDeclaration);
    }


    visit(node, fctx, assets, ctx) {
        assets.functions = assets.functions || [];


        function functionExtractor(node) {
            if (node.kind === typescript.SyntaxKind.ModuleBlock) {
                typescript.visitEachChild(node, functionExtractor);
            }
            if (node.kind === typescript.SyntaxKind.FunctionDeclaration) {
                let funcdecl = {
                    type: 'function',
                    icon: 'fal fa-function',
                    name: node.name.escapedText,
                    parameters: []
                };

                if (node.jsDoc) {
                    let doclet = node.jsDoc;
                    for (let doc in Object.keys(doclet)) {
                        let tags = doclet[doc].tags;
                        for (let tagkey in tags) {
                            let tag = tags[tagkey];
                            let tn = tag && tag.tagName,
                                name = tn && tn.escapedText;
                            if (name === 'group') {
                                funcdecl.group = tag.comment;
                            } else if (name === 'groupIcon') {
                                funcdecl.groupIcon = tag.comment
                            }
                        }
                    }
                }

                if (node.parameters) {
                    for (let param of node.parameters) {
                        let t = param.type,
                            tn = t && t.typeName,
                            name = tn && tn.escapedText ||
                                typescript.SyntaxKind[param.type.kind]
                                    .replace('Keyword', '').toLowerCase();


                        funcdecl.parameters.push({
                            name: param.name.escapedText,
                            type: name
                        });
                    }
                }
                funcdecl.group = funcdecl.group || 'default';
                assets[funcdecl.group] = assets[funcdecl.group] || {components: []};
                if(funcdecl.groupIcon) {
                    assets[funcdecl.group].icon = funcdecl.groupIcon;
                }
                assets[funcdecl.group].components.push(funcdecl);
                assets.current = funcdecl.group;
            }
        }

        typescript.visitEachChild(node, functionExtractor);

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


        let bindableHandler = (cl, node) => {
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
            cl.properties.push({
                location: cl.base,
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
        let cl = {
            type: 'class',
            location: fctx.base,
            base: fctx.base,
            name: node.name.escapedText,
            properties: [],
        };
        this.extractDecorators(cl, node, assets);
        this.extractAttributes(cl, node, assets);

        if (node.jsDoc) {
            let doclet = node.jsDoc,
                comments = [];
            for (let k in Object.keys(doclet)) {
                if (doclet[k].tags) {
                    let tags = doclet[k].tags;
                    for (let tag in tags) {
                        this.handleTag(tags[tag], cl);

                    }
                }
                comments.push(doclet[k].comment);
            }
            cl.comments = comments;
        }
        cl.group = cl.group || 'default';
        assets[cl.group] = assets[cl.group] || {
            components: [],
            properties: [],
            icon: 'fal fa-sitemap'
        };
        cl.icon = cl.icon || 'fal fa-cube';
        assets[cl.group].components.push(cl);
        if (cl['group-icon']) {
            assets[cl.group].icon = cl['group-icon'];
        }
        assets.current = cl;
    }

    handleTag(tag, cl) {
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
    manager.register(new ModuleFunctionExtractorPlugin());
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

        // generateFunctionGroups(assets);
        writeDescriptor(this, fcontext, assets);
        writeAssets(this, fcontext, assets);


        cb();
    });

}

function writeDescriptor(all, fcontext, assets) {
    let rel = fcontext.relativePath,
        target = path.dirname(rel);
    let
        descriptor = assets && assets.current;
    if (descriptor && descriptor.group) {
        let output = new File({
            path: path.join(target, descriptor.group, fcontext.base + '.json')
        });

        output.contents = Buffer.from(JSON.stringify(descriptor));
        all.push(output);
        delete assets['current'];
    } else if(typeof descriptor === 'string') {

        let output = new File({
            path: path.join(target, descriptor + '.json')
        });

        output.contents = Buffer.from(JSON.stringify(assets[descriptor]));
        all.push(output);
    }
}

function writeAssets(all, fcontext, assets) {
    let output = new File({
        path: fcontext.realFile.cwd + '/assets.json'
    });
    output.contents = Buffer.from(JSON.stringify(transformAssets(assets)));
    all.push(output);
}


function transformAssets(assets) {
    let result = {groups: []};
    for (let group of Object.keys(assets)) {
        let ag = assets[group];
        if(ag && ag.components) {
            result.groups.push({
                name: group,
                icon: ag.icon,
                components: ag.components &&
                    ag.components.map(t => {
                        return {
                            type: t.type,
                            name: t.name,
                            icon: t.icon,
                            location: t.location
                        }
                    })
            });
        }
    }
    return result;

}

module.exports = {
    generateDocumentation: generateDocumentation
};
