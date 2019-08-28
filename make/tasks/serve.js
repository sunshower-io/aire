const {task, series} = require('gulp');
const browserSync = require('browser-sync');

task('serve:all', (done) => {
    browserSync(
        {
            injectChanges: true,
            online: false,
            open: false,
            port: 9000,
            server: {
                baseDir: ['.'],
                middleware: function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }
            }
        },
        done
    );
});

task('serve-bundle', (done) => {
    browserSync(
        {
            online: false,
            open: false,
            port: 9000,
            server: {
                baseDir: ['.'],
                middleware: function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }
            }
        },
        done
    );
});

task('serve-export', (done) => {
    browserSync(
        {
            online: false,
            open: false,
            port: 9000,
            server: {
                baseDir: ['./export'],
                middleware: function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }
            }
        },
        done
    );
});
