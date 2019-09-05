const gulp = require('gulp');
const path = require('path');
const typescript = require('typescript');

const through =
    require('through2');

const yaml = require('js-yaml');
const fs = require('fs');

const File = require('vinyl');

class Plugin {

    constructor(accepts) {
        this.accepts = accepts;

    }

    visit(ast, f) {
        let accepts = this.accepts;

        function doVisit(node) {
            if (node.kind === accepts) {
                f(node)
            }
        }

        typescript.forEachChild(ast, doVisit);
    }

}

class FunctionResolver extends Plugin {

    constructor() {
        super(typescript.SyntaxKind.ModuleDeclaration);
    }

    apply(ast, component, assets) {

        console.log(ast);
    }


}

class ClassResolver extends Plugin {

    constructor() {
        super(typescript.SyntaxKind.ClassDeclaration);
    }

    apply(ast, component, assets) {

        if (ast.decorators) {
            for (let decorator of ast.decorators) {
                let expr = decorator && decorator.expression,
                    actualExpression = expr && expr.expression,
                    txt = ast.name.escapedText,
                    foundVal =
                        assets.objects.classes.find(t => t.type === txt),
                    value = foundVal || {
                        type: txt
                    };
                if (actualExpression) {
                    if (actualExpression.escapedText === 'customElement') {
                        component.type = 'CustomElement';
                        component['tag-name'] = expr.arguments[0].text;
                        value['tag-name'] = component['tag-name'];
                    }
                }
                if (!foundVal) {
                    assets.objects.classes.push(value);
                }

            }
        }
    }
}

const Plugins = [new ClassResolver(), new FunctionResolver()];


function process() {
    let assets = {
        categories: [], objects: {
            classes: [],
            functions: []
        }
    };
    return through.obj(function (file, enc, callback) {
        let fileSet = readFileSet(file, assets);
        if (fileSet.type === 'doc') {
            let descriptor = readDocs(fileSet, assets);

            if (fileSet.viewModel) {
                extractTypes(
                    fileSet.viewModel, {
                        icon: descriptor && descriptor.component.icon,
                        name: fileSet.name
                    }, assets);

            }


            let output = new File({path: file.cwd + '/components.json'});
            output.contents = Buffer.from(JSON.stringify(assets));

            if(descriptor) {

                let buffer = Buffer.from(JSON.stringify(descriptor)),
                    stream = through();
                stream.write(buffer);
            }

            let targetDir = path
                .dirname(fileSet.relative)
                .split(path.sep).pop();


            let dest = new File({
                path: path.join(
                    targetDir,
                    descriptor.category, fileSet.name + '.json')
            });
            dest.contents = buffer;
            this.push(dest);
            this.push(output);
        }
        callback();
    });
}

function extractTypes(source, component, assets) {
    let vm = source.path,
        src = fs.readFileSync(vm, 'utf8');

    let sfile = typescript.createSourceFile(
        vm,
        src,
        typescript.ScriptTarget.Latest,
        true
    );
    doExtract(sfile, component, Plugins, assets);
}


function doExtract(ast, component, plugins, assets) {
    for (let plugin of plugins) {
        function doApply(...args) {
            plugin.apply.apply(plugin, args.concat([component, assets]));
        }
        plugin.visit(ast, doApply);
    }
}

function readDocs(fileSet, assets) {
    if (fileSet.docFile && fs.existsSync(fileSet.docFile.path)) {
        let desc = yaml.safeLoad(fs.readFileSync(fileSet.docFile.path)),
            category = desc.component.category;
        let categoryDesc = assets.categories.find(t => t.name === category);
        if (!categoryDesc) {
            readCategoryDescriptor(fileSet.docFile, fileSet.relative, assets);
            categoryDesc = assets.categories.find(t => t.name === category);
        }
        desc.category = category;
        return desc;
    }


}


function readCategoryDescriptor(file, relative, assets) {
    let category = assets
        .categories
        .filter(
            category => category.relative === relative
        );
    if (!category.length) {
        let directory = path.dirname(file.path),
            descfile = path.resolve(directory, 'assets.yaml');
        if (fs.lstatSync(descfile).isFile()) {

            let
                descriptor = yaml.safeLoad(fs.readFileSync(descfile)),
                categoryDescriptors = descriptor.categories;

            for (let categoryDescriptor of categoryDescriptors) {

                let c = {
                    relative: relative,
                    name: categoryDescriptor.category.id,
                    icon: categoryDescriptor.category.icon,
                    components: []
                };
                assets.categories.push(c);
            }
            return assets;

        }
    }
    return {
        type: 'category'
    };

}

/**
 * precondition: file.ext === 'yaml';
 * @param file
 * @param categories
 * @returns {{type}}
 */
function readFileSet(file, categories) {

    let directory = path.dirname(file.path),
        fileBase = path.parse(file.path).name,
        relative = path.dirname(file.path).substring(file.base.length + 1);

    if (fileBase === 'assets') {

        return readCategoryDescriptor(file, relative, categories);


    } else {
        return {
            type: "doc",
            name: fileBase,
            directory: directory,
            relative: relative,
            docFile: lookFor(
                directory,
                relative,
                fileBase,
                file,
                '.yaml'
            ),
            view: lookFor(
                directory,
                relative,
                fileBase,
                file,
                '.pug'
            ),
            viewModel: file,
        };
    }

}

function lookFor(directory, relative, fileBase, file, ext) {
    let subjective = path.join(directory, fileBase + ext),
        stats = fs.existsSync(subjective) && fs.lstatSync(subjective);
    if (stats && stats.isFile()) {
        return {
            subjective: subjective,
            file: new File({path: path.join(relative, fileBase + ext)}),
            path: subjective
        };
    }
    return undefined;
}

module.exports = process;
