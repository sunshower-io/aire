module.exports = {
  bundles: {
    'dist/aire': {
      includes: [
        'dist/**/*.js',
        'dist/**/*.html!text'
      ],
      excludes: [
          'aurelia-framework',
          'aurelia-router',
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};
