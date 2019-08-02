var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/';

module.exports = {
  scssIncludes : [
      'node_modules/uikit/src/scss',
      "node_modules/@fortawesome/fontawesome-pro/scss"
      ],
  assets: [
    "node_modules/@fortawesome/fontawesome-pro/webfonts/**/*.{gif,jpg,png,svg,eot,ttf,woff,woff2}"

  ],
  root: appRoot,
  scss: ['src/main/themes/**/*.scss'],
  pug: appRoot + 'main/**/*.pug',
  source: appRoot + 'main/**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: [outputRoot, exporSrvtRoot],
  exportSrv: exporSrvtRoot,
  // locales: 'locales/**/*.yml',
  locales: ['en'],
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: ['./typings/**/*.d.ts', './custom_typings/**/*.d.ts']
};
