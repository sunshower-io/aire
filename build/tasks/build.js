let gulp = require('gulp');
let runSequence = require('run-sequence');
let paths = require('../paths');
var typescript = require('gulp-typescript');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
let compilerOptions = require('../babel-options');
let assign = Object.assign || require('object.assign');

gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es2015'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output + 'es2015'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});


var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-system', function() {
    if(!typescriptCompiler) {
        typescriptCompiler = typescript.createProject('tsconfig.json', {
            "typescript": require('typescript')
        });
    }

    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(changed(paths.output, {extension: '.ts'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(typescriptCompiler())
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest(paths.output + 'amd'));
});



gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-html', 'build-css', 'build-system'],
    callback
  );
});
