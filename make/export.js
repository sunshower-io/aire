// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  list: [
    // 'index.html',
    'jspm.config.js',
    'package.json',
    'jspm.browser.js',
    'dist/docs/index.html',
    'dist/aire.css',
    'dist/themes/**/*',

    'jspm_packages/system.js',


    'jspm_packages/npm/aurelia-bootstrapper@2.3.3.json',
    'jspm_packages/npm/aurelia-bootstrapper@2.3.3/**/*',

    'jspm_packages/npm/uikit@3.1.5.json',
    'jspm_packages/npm/uikit@3.1.5/dist/**/*',
  ],
};
