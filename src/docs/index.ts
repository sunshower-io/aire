// import 'aire/themes/dark/aire.css!';
// import 'sunshower-aire/aire.css!';
import {Aurelia} from 'aurelia-framework';

export async function configure(application : Aurelia) {
  application.use
             .standardConfiguration();
  await application.start();
  await application.setRoot('docs/main');
}
