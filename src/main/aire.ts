import 'aire/themes/dark/aire.css!'
import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg : FrameworkConfiguration) {
  cfg.globalResources([
    'aire/layout/viewport',
    'aire/layout/header',
    'aire/layout/footer'
  ]).plugin(PLATFORM.moduleName('aurelia-animator-css'));

}