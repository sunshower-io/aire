module.exports = {
    force: true,
    baseURL: '.',             // baseURL of the application
    configPath: [             // SystemJS/JSPM configuration files
        './jspm.config.js'
    ],
    injectionConfigPath: './jspm.config.js',  // Configuration file path where bundle and depCache meta will be injected.
    bundles: {
        "dist/app-build": {     // bundle name/path. Must be within `baseURL`. Output path will look like: `baseURL/dist/app-build.js`.
            includes: [
                'dist/core/*.js',
                'dist/component/*.js',
                'dist/**/*.html!text',
                'dist/**/*.css!text'
            ],

            excludes: [
                'aurelia-bootstrapper',
                'aurelia-fetch-client',
                'aurelia-router',
                'aurelia-animator-css',
                'aurelia-framework',
                'aurelia-templating-binding',
                'aurelia-templating-router',
                'aurelia-templating-resources',
                'aurelia-history-browser',
                'aurelia-pal-browser',
                'aurelia-logging-console',
                'aurelia-loader-default'
            ],
            options: {
                inject: true,
                minify:true
            }
        },

        "dist/aurelia": {
            includes: [
                'aurelia-bootstrapper',
                'aurelia-fetch-client',
                'aurelia-router',
                'aurelia-animator-css',
                'aurelia-framework',
                'aurelia-templating-binding',
                'aurelia-templating-resources',
                'aurelia-templating-router',
                'aurelia-history-browser',
                'aurelia-pal-browser',
                'aurelia-logging-console',
                'aurelia-loader-default'
            ],
            options: {
                inject: true,
                minify: true
            }
        },
    }








    // 'dist/docs': {
    //   includes: [
    //     'dist/docs/*.js',
    //     'dist/docs/*.html!text'
    //   ],
    //   excludes:[
    //       'dist/docs/index.html!text'
    //   ],
    //   options: {
    //     inject: false,
    //     minify: true
    //   }
    // },
    //
    // 'dist/aire': {
    //   includes: [
    //     'dist/**/*.js',
    //     'dist/**/*.html!text'
    //   ],
    //   excludes: [
    //       'aurelia-framework',
    //       'aurelia-router',
    //   ],
    //   options: {
    //     inject: false,
    //     minify: true
    //   }
    // }
};
