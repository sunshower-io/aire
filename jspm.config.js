SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "docs/": "dist/docs/",
    "aire/": "dist/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  packages: {
    "aire": {
      "main": "aire.js",
      "defaultExtension": "js",
      "format": "cjs"
    },
    "/dist/docs/": {
      "defaultExtension": "js",
      "format": "cjs"
    },
    "npm:aurelia-loader@1.0.2": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.3",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6"
      }
    },
    "npm:aurelia-task-queue@1.3.3": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-templating@1.10.2": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@2.4.0",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.2",
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-path": "npm:aurelia-path@1.1.3",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6"
      }
    },
    "npm:aurelia-metadata@1.0.6": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-route-recognizer@1.3.2": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.3"
      }
    },
    "npm:aurelia-event-aggregator@1.0.3": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2"
      }
    },
    "npm:aurelia-bootstrapper@2.3.3": {
      "map": {
        "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
        "aurelia-history": "npm:aurelia-history@1.2.1",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
        "aurelia-templating": "npm:aurelia-templating@1.10.2",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
        "aurelia-router": "npm:aurelia-router@1.7.1",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.12.0",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-framework": "npm:aurelia-framework@1.3.1",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3"
      }
    },
    "npm:aurelia-history-browser@1.4.0": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.2.1",
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-templating-binding@1.5.3": {
      "map": {
        "aurelia-templating": "npm:aurelia-templating@1.10.2",
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-binding": "npm:aurelia-binding@2.4.0"
      }
    },
    "npm:aurelia-polyfills@1.3.4": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-loader-default@1.2.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-loader": "npm:aurelia-loader@1.0.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6"
      }
    },
    "npm:aurelia-logging-console@1.1.1": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2"
      }
    },
    "npm:aurelia-binding@2.4.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
      }
    },
    "npm:aurelia-fetch-client@1.8.2": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    }
  },
  bundles: {
    "aire/app-build.js": [
      "gulpfile.js",
      "jest.config.js",
      "jspm.config.js"
    ],
    "aire/aurelia.js": [
      "npm:aurelia-animator-css@1.0.4.json",
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
      "npm:aurelia-binding@2.4.0.json",
      "npm:aurelia-binding@2.4.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.3.3.json",
      "npm:aurelia-bootstrapper@2.3.3/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.5.0.json",
      "npm:aurelia-dependency-injection@1.5.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.3.json",
      "npm:aurelia-event-aggregator@1.0.3/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.8.2.json",
      "npm:aurelia-fetch-client@1.8.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.3.1.json",
      "npm:aurelia-framework@1.3.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.4.0.json",
      "npm:aurelia-history-browser@1.4.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.2.1.json",
      "npm:aurelia-history@1.2.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.2.1.json",
      "npm:aurelia-loader-default@1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.2.json",
      "npm:aurelia-loader@1.0.2/aurelia-loader.js",
      "npm:aurelia-logging-console@1.1.1.json",
      "npm:aurelia-logging-console@1.1.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.5.2.json",
      "npm:aurelia-logging@1.5.2/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.6.json",
      "npm:aurelia-metadata@1.0.6/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.8.1.json",
      "npm:aurelia-pal-browser@1.8.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.8.2.json",
      "npm:aurelia-pal@1.8.2/aurelia-pal.js",
      "npm:aurelia-path@1.1.3.json",
      "npm:aurelia-path@1.1.3/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.4.json",
      "npm:aurelia-polyfills@1.3.4/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.3.2.json",
      "npm:aurelia-route-recognizer@1.3.2/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.7.1.json",
      "npm:aurelia-router@1.7.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.3.json",
      "npm:aurelia-task-queue@1.3.3/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.5.3.json",
      "npm:aurelia-templating-binding@1.5.3/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.12.0.json",
      "npm:aurelia-templating-resources@1.12.0/aurelia-templating-resources.js",
      "npm:aurelia-templating@1.10.2.json",
      "npm:aurelia-templating@1.10.2/aurelia-templating.js"
    ]
  },
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@2.4.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.3",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.8.2",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history": "npm:aurelia-history@1.2.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
    "aurelia-logging": "npm:aurelia-logging@1.5.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
    "aurelia-pal": "npm:aurelia-pal@1.8.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
    "aurelia-path": "npm:aurelia-path@1.1.3",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2",
    "aurelia-router": "npm:aurelia-router@1.7.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
    "aurelia-templating": "npm:aurelia-templating@1.10.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.12.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0",
    "css": "github:systemjs/plugin-css@0.1.37",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.11",
    "uikit": "npm:uikit@3.1.5"
  }
});