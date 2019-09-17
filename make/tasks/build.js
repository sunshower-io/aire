const {
    dest,
    task,
    src,
    series,
    parallel,
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
/**
 * Typescript project
 */
const tsc = typescript.createProject(
    'tsconfig.json',
    {
        typescript: require('typescript')
    });


const docs = require('./docs')(tsc);


/**
 * copy package.json file to output
 */
task('copy:package', () => {
    return src([
        './package.json',
        './jspm.config.js']
    ).pipe(dest(paths.output));
});


/**
 * Copy all required fonts from node_modules
 */
task('copy:assets', function () {
    return src(paths.assets)
        .pipe(dest(paths.output + "/themes/webfonts/"));
});

/**
 * Copy all supplied fonts
 */

task('copy:fonts', () => {
    return src(paths.fonts).pipe(
        dest(paths.output + '/themes/webfonts/'));
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

task('build:static', () => {
    return src('src/main/themes/spinner.scss').pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(dest(paths.output + '/assets/styles'));
});


task('build:light', () => {
    return src(paths.scss.light).pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(concat('aire.css')).pipe(dest(paths.output + '/themes/light'));
});


task('build:dark', () => {
    return src(paths.scss.dark).pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(concat('aire.css')).pipe(dest(paths.output + '/themes/dark'));
});

task('build:styles', parallel(
    'build:light',
    'build:dark',
    'build:docs:styles',
    'build:docs:light',
    'build:docs:dark'
));


task('copy', parallel(
    'copy:assets',
    'copy:package',
    'copy:fonts',
    'copy:docs:assets'
));


task('build:docs', parallel(
    'build:docs:source',
    'build:docs:pug'
));

task('build', series(
    'build:docs:structure',
    'build:documentation',
    parallel(
        series(
            'build:source',
            'build:docs:source'
        ),
        'build:html',
        'build:styles',
        'copy',
        'build:docs:pug'
    )));

