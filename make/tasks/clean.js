const {
        task,
        series,
        src
    } = require('gulp'),
    paths = require('../paths'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');

task('clean:all', () => {
    return src([paths.output, paths.exportSrv], {allowEmpty: true}).pipe(vinylPaths(del));
});

task('clean', series('clean:all'));

