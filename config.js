System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "golden-layout": "npm:golden-layout@1.5.9",
    "jquery": "npm:jquery@3.3.1",
    "phosphor-dockpanel": "npm:phosphor-dockpanel@0.9.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.6.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-framework@1.1.5": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-templating@1.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:golden-layout@1.5.9": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:phosphor-boxpanel@1.0.0-rc.0": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-boxengine": "npm:phosphor-boxengine@1.0.1",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-panel": "npm:phosphor-panel@1.0.0-rc.1",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-dockpanel@0.9.7": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-dragdrop": "npm:phosphor-dragdrop@0.9.1",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-nodewrapper": "npm:phosphor-nodewrapper@1.0.6",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-splitpanel": "npm:phosphor-splitpanel@1.0.0-rc.1",
      "phosphor-stackedpanel": "npm:phosphor-stackedpanel@1.0.0-rc.0",
      "phosphor-tabs": "npm:phosphor-tabs@1.0.0-rc.2",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-domutil@1.2.0": {
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5"
    },
    "npm:phosphor-dragdrop@0.9.1": {
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-messaging@1.0.6": {
      "phosphor-queue": "npm:phosphor-queue@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-panel@1.0.0-rc.1": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-properties@2.0.0": {
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0"
    },
    "npm:phosphor-splitpanel@1.0.0-rc.1": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-boxengine": "npm:phosphor-boxengine@1.0.1",
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-panel": "npm:phosphor-panel@1.0.0-rc.1",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-stackedpanel@1.0.0-rc.0": {
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-panel": "npm:phosphor-panel@1.0.0-rc.1",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1"
    },
    "npm:phosphor-tabs@1.0.0-rc.2": {
      "phosphor-arrays": "npm:phosphor-arrays@1.0.6",
      "phosphor-boxpanel": "npm:phosphor-boxpanel@1.0.0-rc.0",
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-domutil": "npm:phosphor-domutil@1.2.0",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0",
      "phosphor-stackedpanel": "npm:phosphor-stackedpanel@1.0.0-rc.0",
      "phosphor-widget": "npm:phosphor-widget@1.0.0-rc.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:phosphor-widget@1.0.0-rc.1": {
      "phosphor-disposable": "npm:phosphor-disposable@1.0.5",
      "phosphor-messaging": "npm:phosphor-messaging@1.0.6",
      "phosphor-nodewrapper": "npm:phosphor-nodewrapper@1.0.6",
      "phosphor-properties": "npm:phosphor-properties@2.0.0",
      "phosphor-queue": "npm:phosphor-queue@1.0.5",
      "phosphor-signaling": "npm:phosphor-signaling@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
