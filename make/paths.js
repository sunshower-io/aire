var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/';

module.exports = {
    scssIncludes: [
        'node_modules/uikit/src/scss',
        'node_modules/perfect-scrollbar/css',
        "node_modules/@fortawesome/fontawesome-pro/scss",
        "src/main/themes/base"
    ],
    assets: [
        "node_modules/@fortawesome/fontawesome-pro/webfonts/**/*.{gif,jpg,png,svg,eot,ttf,woff,woff2}"

    ],

    fonts: appRoot + 'main/themes/fonts/**/*',
    root: appRoot,
    // scss: ['src/main/themes/**/*.scss'],
    scss: {
        base: 'src/main/themes/base/**/*.scss',
        dark: 'src/main/themes/dark/theme.scss',
        light: 'src/main/themes/light/theme.scss'
    },
    docs: {

        scss: {
            base: 'src/docs/styles/themes/base/**/*.scss',
            dark: 'src/docs/styles/themes/dark/theme.scss',
            light: 'src/docs/styles/themes/light/theme.scss'
        },
        output: outputRoot + '/docs',
        pug: appRoot + 'docs/**/*.pug',
        source: appRoot + 'docs/**/*.ts',
        assets: appRoot + 'docs/assets/**/*.{gif,svg,jpg,png}'
    },
    pug: appRoot + 'main/**/*.pug',
    source: appRoot + 'main/**/*.ts',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    style: 'styles/**/*.css',
    output: outputRoot,
    exportSrv: exporSrvtRoot,
    // locales: 'locales/**/*.yml',
    locales: ['en'],
    e2eSpecsSrc: 'test/e2e/src/**/*.ts',
    e2eSpecsDist: 'test/e2e/dist/',
    dtsSrc: ['./typings/**/*.d.ts', './custom_typings/**/*.d.ts']
};
