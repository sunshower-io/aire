import 'reflect-metadata';
import 'aurelia-polyfills';
import 'system';
import {Options}               from 'aurelia-loader-nodejs';
import {globalize, initialize} from 'aurelia-pal-nodejs';

import 'isomorphic-fetch';
import * as path               from 'path';

require('jsdom-global')();
import 'mutationobserver-shim';

Object.defineProperty(global, 'MutationObserver', {
  value    : (window as any).MutationObserver,
  writable : true
});


import * as UIkit from 'uikit';
// import {Aire}        from "aire/core/application";

Options.relativeToDir = path.join(__dirname, '../../dist');
globalize();
let animationFrameId : number;
Object.defineProperty(global, 'requestAnimationFrame', {
  value    : function () {
    return (animationFrameId = setTimeout(() => {
    }));
  },
  writable : true

});

Object.defineProperty(global, 'cancelAnimationFrame', {
  value    : function (id : number) {
    return clearTimeout(id);
  },
  writable : true
});
// Aire.initialize(UIkit.util);