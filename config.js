System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
    "@material/*": {
      "format": "esm"
    }
  },

  map: {
    "@material/toolbar": "npm:@material/toolbar@0.28.0",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "golden-layout": "npm:golden-layout@1.5.9",
    "jquery": "npm:jquery@3.3.1",
    "material-components-web": "npm:material-components-web@0.28.0",
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
    "npm:@material/button@0.28.0": {
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/card@0.28.0": {
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/checkbox@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/dialog@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.1.1",
      "focus-trap": "npm:focus-trap@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/drawer@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/elevation@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/theme": "npm:@material/theme@0.4.0"
    },
    "npm:@material/fab@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/form-field@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/grid-list@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/icon-toggle@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/linear-progress@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/list@0.28.0": {
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/menu@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/radio@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/ripple@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/select@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/list": "npm:@material/list@0.28.0",
      "@material/menu": "npm:@material/menu@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/selection-control@0.28.0": {
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/slider@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/snackbar@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/switch@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0"
    },
    "npm:@material/tabs@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/textfield@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/toolbar@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
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
    "npm:focus-trap@2.4.2": {
      "tabbable": "npm:tabbable@1.1.2"
    },
    "npm:golden-layout@1.5.9": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:material-components-web@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/auto-init": "npm:@material/auto-init@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/button": "npm:@material/button@0.28.0",
      "@material/card": "npm:@material/card@0.28.0",
      "@material/checkbox": "npm:@material/checkbox@0.28.0",
      "@material/dialog": "npm:@material/dialog@0.28.0",
      "@material/drawer": "npm:@material/drawer@0.28.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/fab": "npm:@material/fab@0.28.0",
      "@material/form-field": "npm:@material/form-field@0.28.0",
      "@material/grid-list": "npm:@material/grid-list@0.28.0",
      "@material/icon-toggle": "npm:@material/icon-toggle@0.28.0",
      "@material/layout-grid": "npm:@material/layout-grid@0.24.0",
      "@material/linear-progress": "npm:@material/linear-progress@0.28.0",
      "@material/list": "npm:@material/list@0.28.0",
      "@material/menu": "npm:@material/menu@0.28.0",
      "@material/radio": "npm:@material/radio@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/select": "npm:@material/select@0.28.0",
      "@material/selection-control": "npm:@material/selection-control@0.28.0",
      "@material/slider": "npm:@material/slider@0.28.0",
      "@material/snackbar": "npm:@material/snackbar@0.28.0",
      "@material/switch": "npm:@material/switch@0.28.0",
      "@material/tabs": "npm:@material/tabs@0.28.0",
      "@material/textfield": "npm:@material/textfield@0.28.0",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/toolbar": "npm:@material/toolbar@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
