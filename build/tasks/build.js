const {
    dest,
    task,
    src,
    pipe,
    parallel,
    series
} = require('gulp');

const pug = require('gulp-pug');
const paths = require('../paths');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');


const tsc = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});


task('build:html', () => {
    return src(paths.pug).pipe(pug()).pipe(dest(paths.output));
});

task('build:source', () => {
    return src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(changed(paths.output, {extension: '.ts'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(tsc())
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '.'}))
        .pipe(dest(paths.output));
});


task('build', parallel('build:source', 'build:html'));
