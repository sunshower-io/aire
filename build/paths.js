var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/';

module.exports = {
  root: appRoot,
  scss: ['themes/theme-default.scss'],
  pug: appRoot + '**/*.pug',
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exporSrvtRoot,
  // locales: 'locales/**/*.yml',
  locales: ['en'],
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: ['./typings/**/*.d.ts', './custom_typings/**/*.d.ts']
};
