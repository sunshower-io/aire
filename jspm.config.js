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
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
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
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.37",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "perfect-scrollbar": "npm:perfect-scrollbar@1.4.0",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "showdown": "npm:showdown@1.9.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.11",
    "uikit": "npm:uikit@3.1.5",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "velocity-animate": "npm:velocity-animate@1.5.2"
  },
  packages: {
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
    },
    "npm:showdown@1.9.0": {
      "map": {
        "yargs": "npm:yargs@10.1.2"
      }
    },
    "npm:yargs@10.1.2": {
      "map": {
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "set-blocking": "npm:set-blocking@2.0.0",
        "string-width": "npm:string-width@2.1.1",
        "y18n": "npm:y18n@3.2.1",
        "which-module": "npm:which-module@2.0.0",
        "find-up": "npm:find-up@2.1.0",
        "require-directory": "npm:require-directory@2.1.1",
        "get-caller-file": "npm:get-caller-file@1.0.3",
        "cliui": "npm:cliui@4.1.0",
        "os-locale": "npm:os-locale@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "yargs-parser": "npm:yargs-parser@8.1.0"
      }
    },
    "npm:cliui@4.1.0": {
      "map": {
        "string-width": "npm:string-width@2.1.1",
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "wrap-ansi": "npm:wrap-ansi@2.1.0"
      }
    },
    "npm:string-width@2.1.1": {
      "map": {
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
      }
    },
    "npm:find-up@2.1.0": {
      "map": {
        "locate-path": "npm:locate-path@2.0.0"
      }
    },
    "npm:os-locale@2.1.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0",
        "mem": "npm:mem@1.1.0",
        "execa": "npm:execa@0.7.0"
      }
    },
    "npm:wrap-ansi@2.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.1.0"
      }
    },
    "npm:yargs-parser@8.1.0": {
      "map": {
        "camelcase": "npm:camelcase@4.1.0"
      }
    },
    "npm:strip-ansi@4.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@3.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:locate-path@2.0.0": {
      "map": {
        "p-locate": "npm:p-locate@2.0.0",
        "path-exists": "npm:path-exists@3.0.0"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:mem@1.1.0": {
      "map": {
        "mimic-fn": "npm:mimic-fn@1.2.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:execa@0.7.0": {
      "map": {
        "strip-eof": "npm:strip-eof@1.0.0",
        "p-finally": "npm:p-finally@1.0.0",
        "is-stream": "npm:is-stream@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.2",
        "npm-run-path": "npm:npm-run-path@2.0.2",
        "get-stream": "npm:get-stream@3.0.0",
        "cross-spawn": "npm:cross-spawn@5.1.0"
      }
    },
    "npm:p-locate@2.0.0": {
      "map": {
        "p-limit": "npm:p-limit@1.3.0"
      }
    },
    "npm:p-limit@1.3.0": {
      "map": {
        "p-try": "npm:p-try@1.0.0"
      }
    },
    "npm:npm-run-path@2.0.2": {
      "map": {
        "path-key": "npm:path-key@2.0.1"
      }
    },
    "npm:cross-spawn@5.1.0": {
      "map": {
        "lru-cache": "npm:lru-cache@4.1.5",
        "which": "npm:which@1.3.1",
        "shebang-command": "npm:shebang-command@1.2.0"
      }
    },
    "npm:lru-cache@4.1.5": {
      "map": {
        "pseudomap": "npm:pseudomap@1.0.2",
        "yallist": "npm:yallist@2.1.2"
      }
    },
    "npm:which@1.3.1": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:shebang-command@1.2.0": {
      "map": {
        "shebang-regex": "npm:shebang-regex@1.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.2"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.4.2"
      }
    },
    "npm:stream-browserify@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "process-nextick-args": "npm:process-nextick-args@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@1.1.1"
      }
    },
    "npm:buffer@5.4.2": {
      "map": {
        "ieee754": "npm:ieee754@1.1.13",
        "base64-js": "npm:base64-js@1.3.1"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    }
  }
});