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
    "@gitgraph/js": "npm:@gitgraph/js@1.3.2",
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
    "clipboard": "npm:clipboard@2.0.4",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.37",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "fuse.js": "npm:fuse.js@3.4.5",
    "jdenticon": "npm:jdenticon@2.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "perfect-scrollbar": "npm:perfect-scrollbar@1.4.0",
    "prismjs": "npm:prismjs@1.17.1",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "showdown": "npm:showdown@1.9.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "text": "github:systemjs/plugin-text@0.0.11",
    "uikit": "npm:uikit@3.1.5",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "velocity-animate": "npm:velocity-animate@1.5.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
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
        "buffer": "npm:buffer@5.4.3"
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
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:clipboard@2.0.4": {
      "map": {
        "good-listener": "npm:good-listener@1.2.2",
        "select": "npm:select@1.1.2",
        "tiny-emitter": "npm:tiny-emitter@2.1.0"
      }
    },
    "npm:good-listener@1.2.2": {
      "map": {
        "delegate": "npm:delegate@3.2.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jdenticon@2.2.0": {
      "map": {
        "canvas-renderer": "npm:canvas-renderer@2.1.1",
        "@types/node": "npm:@types/node@12.7.5"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:buffer@5.4.3": {
      "map": {
        "base64-js": "npm:base64-js@1.3.1",
        "ieee754": "npm:ieee754@1.1.13"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "randomfill": "npm:randomfill@1.0.4",
        "create-hmac": "npm:create-hmac@1.1.7",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.17",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "randombytes": "npm:randombytes@2.1.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.1"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "md5.js": "npm:md5.js@1.3.5",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "randombytes": "npm:randombytes@2.1.0"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:public-encrypt@4.0.3": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "randombytes": "npm:randombytes@2.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.5",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "inherits": "npm:inherits@2.0.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.5",
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.5.1"
      }
    },
    "npm:pbkdf2@3.0.17": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:md5.js@1.3.5": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.5.1"
      }
    },
    "npm:parse-asn1@5.1.5": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "pbkdf2": "npm:pbkdf2@3.0.17",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "asn1.js": "npm:asn1.js@4.10.1",
        "browserify-aes": "npm:browserify-aes@1.2.0"
      }
    },
    "npm:randombytes@2.1.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:elliptic@6.5.1": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "bn.js": "npm:bn.js@4.11.8",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.5",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:hash.js@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.2"
      }
    },
    "npm:browserify-des@1.0.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:@gitgraph/js@1.3.2": {
      "map": {
        "@gitgraph/core": "npm:@gitgraph/core@1.4.2"
      }
    }
  }
});