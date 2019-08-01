const {
    dest,
    task,
    src,
    pipe,
    parallel,
    series
} = require('gulp');
const flatten = require('gulp-flatten');
const scss = require('gulp-sass');
const pug = require('gulp-pug');
const paths = require('../paths');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');


const tsc = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});
task('copy:package', () => {
    return src('./package.json').pipe(dest(paths.output));

});
task('copy:assets', function () {
    return src(paths.assets).pipe(dest(paths.output + "/assets"));
});

task('build:html', () => {
    return src(paths.pug)
        .pipe(pug())
        .pipe(flatten({
            includeParents: -1
        }))
        .pipe(dest(paths.output));
});

task('build:source', () => {
    return src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(changed(paths.output, {extension: '.ts'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(tsc())
        .pipe(flatten({
            includeParents: -1
        }))
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '.'}))
        .pipe(dest(paths.output));
});

task('build:styles', () => {

    return src(paths.scss).pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(concat('aire.css')).pipe(dest(paths.output));
});

task('copy', parallel('copy:assets', 'copy:package'));

task('build', parallel('build:source', 'build:html', 'build:styles', 'copy'));
