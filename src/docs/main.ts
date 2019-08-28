
import {Aurelia} from 'aurelia-framework';
import * as LogManager from 'aurelia-logging';
import {ConsoleAppender} from 'aurelia-logging-console';


export async function configure(application : Aurelia) {
  LogManager.addAppender(new ConsoleAppender());
  application.use
             .plugin('aire')
             .developmentLogging('debug')
             .standardConfiguration();
  await application.start();
  await application.setRoot('docs/application');
}
