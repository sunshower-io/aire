import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg : FrameworkConfiguration) {
  cfg.globalResources([

    // Components
    'aire/component/button',
    'aire/component/type',
    'aire/component/navbar',
    // End Components

    // Layout
    'aire/layout/page'
    // End Layout
  ]).plugin(PLATFORM.moduleName('aurelia-animator-css'));

}