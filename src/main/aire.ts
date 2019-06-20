import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg : FrameworkConfiguration) {

  cfg.globalResources([
    'aire/component/button',
    'aire/component/navigation',
    'aire/component/page',
    'aire/component/type',
    'aire/component/navbar'
  ]).plugin(PLATFORM.moduleName('aurelia-animator-css'));

}