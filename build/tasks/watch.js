const {
    parallel,
    series,
    task,
    watch
} = require('gulp');


const sync = require('browser-sync');
const paths = require('../paths');


task('watch:typescript', () => {
    watch(paths.source,
        series('build:source', 'reload')).on('change', reportChange);
});

task('watch:html', () => {
    watch(paths.pug, series('build:html', 'reload')).on('change', reportChange);
});

task('reload', (done) => {
    sync.reload();
    done();
});

task('watch',
    series('serve',
        parallel(
            'watch:typescript',
            'watch:html'
        )));

function reportChange(event) {
    console.log(`File ${event} was changed.  Running tasks...`);
}


