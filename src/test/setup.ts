import 'reflect-metadata';
import 'aurelia-polyfills';
import 'system';
import {Options}               from 'aurelia-loader-nodejs';
import {globalize, initialize} from 'aurelia-pal-nodejs';

import 'isomorphic-fetch';
import * as path               from 'path';

require('jsdom-global')();
import 'mutationobserver-shim';

let w = window as any,
  observer = new w.MutationObserver();
Object.defineProperty(global, 'MutationObserver', {
  value : observer, 

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