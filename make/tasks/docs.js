const gulp = require('gulp');
const path = require('path');

const through =
    require('through2');

const yaml = require('js-yaml');
const fs = require('fs');

const File = require('vinyl');


function process() {
    let categories = {index: []};
    return through.obj(function (file, enc, callback) {
        let fileSet = readFileSet(file),
            descriptor = readDocs(fileSet, categories);


        let output = new File({path: file.cwd + '/components.json'});
        output.contents = Buffer.from(JSON.stringify(categories));


        let buffer = Buffer.from(JSON.stringify(descriptor)),
            stream = through();


        stream.write(buffer);

        let targetDir = path.dirname(fileSet.relative).split(path.sep).pop();


        let dest = new File({
            path: path.join(
                targetDir,
                descriptor.category, fileSet.name + '.json')
        });
        dest.contents = buffer;
        this.push(dest);
        this.push(output);
        callback();
    });
}

function readDocs(fileSet, categories) {
    let desc = yaml.safeLoad(fs.readFileSync(fileSet.docFile.path)),
        category = desc.component.category;
    let categoryDesc = categories.index.find(t => t.name === category);
    if(!categoryDesc) {
        categoryDesc = {name: category, components: []};
        categories.index.push(categoryDesc);
    }

    categoryDesc.components.push(fileSet.name);
    desc.category = category;
    return desc;

}


function readFileSet(file) {

    let directory = path.dirname(file.path),
        fileBase = path.parse(file.path).name,
        relative = path.dirname(file.path).substring(file.base.length + 1);
    return {
        name: fileBase,
        relative: relative,
        docFile: file,
        view: lookFor(
            directory,
            relative,
            fileBase,
            file,
            '.pug'
        ),
        viewModel: lookFor(
            directory,
            relative,
            fileBase,
            file,
            '.pug'
        ),
    };

}

function lookFor(directory, relative, fileBase, file, ext) {
    let subjective = path.join(directory, fileBase + ext),
        stats = fs.lstatSync(subjective);
    if (stats.isFile()) {
        return {
            subjective: subjective,
            file: new File({path: path.join(relative, fileBase + ext)}),
            path: subjective
        };
    }
    return undefined;
}

module.exports = process;
