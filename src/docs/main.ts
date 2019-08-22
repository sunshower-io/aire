// import 'aire/themes/dark/aire.css!';

import {Aurelia} from 'aurelia-framework';
import * as LogManager from 'aurelia-logging';
import {ConsoleAppender} from 'aurelia-logging-console';


export async function configure(application : Aurelia) {
  LogManager.addAppender(new ConsoleAppender());
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
