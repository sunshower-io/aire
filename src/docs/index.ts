// import 'aire/themes/dark/aire.css!';
import {Aurelia} from 'aurelia-framework';

export async function configure(application : Aurelia) {
  application.use
             .plugin('aire')
             .standardConfiguration();
  await application.start();
  await application.setRoot('docs/main');
}
