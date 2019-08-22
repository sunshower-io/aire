// import 'aire/themes/dark/aire.css!';

import {Aurelia} from 'aurelia-framework';

export async function configure(application : Aurelia) {
  console.log("Got one");
  application.use
             // .plugin('aire')
             .developmentLogging('debug')
             .standardConfiguration();
  console.log("Got 2");
  await application.start();
  console.log("Got 3");
  await application.setRoot('docs/application');
  console.log("Got 4");
}
