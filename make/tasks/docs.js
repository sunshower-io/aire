const gulp = require('gulp');

const through =
    require('through2');


gulp.task('traverse', (done) => {
    return gulp.src('./src/**/*.md').pipe(process('hello')).pipe('./dist');
});


function process(text) {

    let stream = through.obj((file, enc, callback) => {
        console.log(file);
        callback();

    });

}



// export class FileSet {
//     /**
//      * Directory
//      */
//     output;
//
//
//     /**
//      * Current directory
//      */
//     cwd;
//
//     /**
//      * The list of processors to apply to this directory
//      */
//     processors;
//
//
//     /**
//      * The current component (e.g. button.pug)
//      */
//     view;
//
//
//     /**
//      * The current view-model (e.g. button.ts)
//      */
//     viewModel;
//
//
//     /**
//      * The current documentation file
//      */
//     docFile;
// }

