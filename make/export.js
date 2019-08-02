// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  list: [
    // 'index.html',
    'jspm.config.js',
    'package.json',
    'jspm.browser.js',
    //
    // 'jspm_packages/github/systemjs/plugin-text@0.0.11/**/*',
    // 'jspm_packages/github/systemjs/plugin-text@0.0.11.json',
    // 'jspm_packages/system.js',
    'dist/aire.css',
    // 'dist/assets/**/*.{svg,jpg,png,gif}',
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  // normalize: [
    // ['plugin-css', ['./**/*']],
    // ['plugin-text', ['/**/*']],
    // ['aire', ['/**/*']],
    // [
    //   // include font-awesome.css and its fonts files
    //   'font-awesome',
    //   ['/css/font-awesome.min.css', '/fonts/*']
    // ],
    // [
    //   // include bootstrap's font files
    //   'bootstrap',
    //   ['/fonts/*']
    // ],
    // ['bluebird', ['/js/browser/bluebird.min.js']]
  // ]
};
