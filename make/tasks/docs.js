const {
    dest,
    task,
    src,
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

module.exports = (tsc) => {
    task('copy:docs:assets', () => {
        return src(paths.docs.assets)
            .pipe(dest(paths.docs.output + '/assets'));
    });

    task('build:docs:structure', (done) => {
        return src('src/**/*.ts')
            .pipe(generateDocumentation())
            .pipe(dest('./docs'));
    });

    task('build:documentation', (done) => {
        return src('docs/**/*')
            .pipe(dest(paths.output + '/docs/output'));
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
};
