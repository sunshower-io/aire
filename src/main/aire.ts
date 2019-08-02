import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg : FrameworkConfiguration) {

  console.log("CFG");
  cfg.globalResources([
    'aire/component/button',
    'aire/component/type',
    'aire/component/navbar'
  ]).plugin(PLATFORM.moduleName('aurelia-animator-css'));

}