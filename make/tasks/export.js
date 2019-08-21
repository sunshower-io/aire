'use strict';

const {
    series,
    task,
    src,
    dest
} = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const jspm = require('jspm');
const paths = require('../paths');
const bundles = require('../bundles.js');
const resources = require('../export.js');

const getBundles = () => {
    let bl = [];
    for (let b in bundles.bundles) {
        bl.push(b + '*.js');
    }
    return bl;
};

function getExportList() {
    return resources.list.concat(getBundles());
}

function normalizeExportPaths() {
    const pathsToNormalize = resources.normalize;
    if(!pathsToNormalize) {
        return null;
    }

    let promises = pathsToNormalize.map(pathSet => {
        const packageName = pathSet[0];
        const fileList = pathSet[1];

        return jspm.normalize(packageName).then(normalized => {
            const packagePath = normalized.substring(
                normalized.indexOf('jspm_packages'),
                normalized.lastIndexOf('.js')
            );
            return fileList.map(file => packagePath + file);
        });
    });

    return Promise.all(promises).then(normalizedPaths => {
        return normalizedPaths.reduce((prev, curr) => prev.concat(curr), []);
    });
}

// deletes all files in the output path
task('clean-export', () => {
    return src([paths.exportSrv], {allowEmpty:true}).pipe(vinylPaths(del));
});

task('export-copy', () => {
    return src(getExportList(), {base: '.', allowEmpty: true})
        .pipe(dest(paths.exportSrv));
});

task('export-normalized-resources', (done) => {
    let paths = normalizeExportPaths();
    if(paths) {
        return paths.then(normalizedPaths => {
            return src(normalizedPaths, {base: '.', allowEmpty:true})
                .pipe(dest(paths.exportSrv));
        });
    } else {
        return done();
    }
});

