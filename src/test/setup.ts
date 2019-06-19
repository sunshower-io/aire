import 'reflect-metadata';
// import 'aurelia-polyfills';
// import 'system';
import {Options}               from 'aurelia-loader-nodejs';
// // import {globalize, initialize} from 'aurelia-pal-browser';
//
// import 'isomorphic-fetch';
import * as path               from 'path';
// const jsdom = require('jsdom');
//
// // require('jsdom-global')();
// import 'mutationobserver-shim';
//
// Object.defineProperty(global, 'MutationObserver', {
//   value    : (window as any).MutationObserver,
//   writable : true
// });
//
//
// import * as UIkit from 'uikit';
// // import {Aire}        from "aire/core/application";
//
Options.relativeToDir = path.join(__dirname, '../../dist/main');
// // globalize();
// let animationFrameId : number;
// Object.defineProperty(global, 'requestAnimationFrame', {
//   value    : function () {
//     return (animationFrameId = setTimeout(() => {
//     }));
//   },
//   writable : true
//
// });
//
// Object.defineProperty(global, 'cancelAnimationFrame', {
//   value    : function (id : number) {
//     return clearTimeout(id);
//   },
//   writable : true
// });
// // Aire.initialize(UIkit.util);

// (global as any).window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     global[property] = document.defaultView[property];
//   }
// });