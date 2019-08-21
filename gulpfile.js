const {
        registry,
        task,
        series,
        parallel,
        watch
    } = require('gulp'),
    HubRegistry = require('gulp-hub');

const sync = require('browser-sync');
const paths = require('./make/paths');
const hub = new HubRegistry('make/**/*.js');

registry(hub);

task(
    'bundle',
    series('build', 'bundle:application')
);

task(
    'unbundle',
    series('unbundle:application')
);


task(
    'export',
    series(
        'bundle',
        'clean-export',
        'export-normalized-resources',
        'export-copy')
);

task('serve', series('serve:all'));


task('default', (cb) => cb());


task('watch:typescript', () => {
    watch(paths.source,
        series('build:source', 'reload')).on('change', reportChange);
});

task('watch:docs:typescript', () => {
    watch(paths.docs.source,
        series('build:docs:source', 'reload')).on('change', reportChange);
});

task('watch:docs:html', () => {
    watch([paths.docs.pug], series('build:docs:pug', 'reload')).on('change', reportChange);
});
task('watch:docs', parallel('watch:docs:typescript', 'watch:docs:html'));

task('watch:html', () => {
    watch(paths.pug, series('build:html', 'reload')).on('change', reportChange);
});

task('watch:styles', () => {
    watch([paths.scss.light, paths.scss.dark], series('build:styles', 'reload')).on('change', reportChange);
});

task('reload', (done) => {
    sync.reload();
    done();
});

task('watch',
    series('serve',
        parallel(
            'watch:docs',
            'watch:html',
            'watch:styles',
            'watch:typescript'
        )));

function reportChange(event) {
    console.log(`File ${event} was changed.  Running tasks...`);
}


