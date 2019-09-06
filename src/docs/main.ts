import {HttpClient} from 'aurelia-fetch-client';
import {Aurelia} from 'aurelia-framework';
import * as LogManager from 'aurelia-logging';
import {ConsoleAppender} from 'aurelia-logging-console';
import 'docs/themes/base/aire.css!';

export async function configure(application : Aurelia) {

  let client = new HttpClient();
  client.configure(cfg => {
    cfg.withBaseUrl('/dist/docs/');
  });
  application.container.registerInstance(HttpClient, client);
  LogManager.addAppender(new ConsoleAppender());
  application.use
             .plugin('aire')
             .developmentLogging('debug')
             .standardConfiguration();
  await application.start();
  await application.setRoot('docs/default');
}
