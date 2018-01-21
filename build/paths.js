var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    style: 'styles/**/*.css',
    output: outputRoot,
    doc: './doc',
    dtsSrc: [
        './typings/**/*.d.ts',
        './custom_typings/**/*.d.ts'
    ]
};
