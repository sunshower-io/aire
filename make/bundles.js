module.exports = {
  bundles: {
    'dist/docs': {
      includes: [
        'dist/docs/*.js',
        'dist/docs/*.html!text'
      ],
      excludes:[
          'dist/docs/index.html!text'
      ],
      options: {
        inject: true,
        minify: true
      }
    },

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