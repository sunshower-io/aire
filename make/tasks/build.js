const {
    dest,
    task,
    src,
    series,
    parallel,
} = require('gulp');
const {
    generateDocumentation
} = require('./aire');
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
    return src(['./package.json', './jspm.config.js']).pipe(dest(paths.output));

});
task('copy:assets', function () {
    return src(paths.assets).pipe(dest(paths.output + "/themes/webfonts/"));
});

task('copy:fonts', () => {
    return src(paths.fonts).pipe(dest(paths.output + '/themes/webfonts/'));
});

task('copy:docs:assets', () => {
    return src(paths.docs.assets).pipe(dest(paths.docs.output + '/assets'));
});


task('build:docs:structure', (done) => {
    return src('src/**/*.ts')
        .pipe(generateDocumentation())
        .pipe(dest('./docs'));
});

task('build:documentation', (done) => {
    return src('docs/**/*').pipe(dest(paths.output + '/docs/output'));
});


task('build:docs:source', () => {
    return src(paths.dtsSrc.concat(paths.docs.source))
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
        .pipe(dest(paths.docs.output));
});

task('build:docs:pug', () => {
    return src(paths.docs.pug)
        .pipe(pug())
        .pipe(flatten({
            includeParents: -1
        }))
        .pipe(dest(paths.docs.output));
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

task('build:docs:styles', () => {
    return src(paths.docs.scss.base).pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(concat('aire.css')).pipe(dest(paths.docs.output + '/themes/base'));
});


task('build:docs:light', () => {
    return src(paths.docs.scss.light).pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(concat('aire.css')).pipe(dest(paths.docs.output + '/themes/light'));
});


task('build:docs:dark', () => {
    return src(paths.docs.scss.dark).pipe(scss({
        includePaths: paths.scssIncludes
    })).pipe(concat('aire.css')).pipe(dest(paths.docs.output + '/themes/dark'));
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

