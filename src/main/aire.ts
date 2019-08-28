import 'aire/themes/dark/aire.css!'
import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg : FrameworkConfiguration) {
  cfg.globalResources([

    /**
     * Layout Elements
     */
    'aire/layout/viewport',
    'aire/layout/header',
    'aire/layout/footer',
    'aire/layout/page',


    /**
     * Navigation Elements
     */
    'aire/nav/navbar'


  ]).plugin(PLATFORM.moduleName('aurelia-animator-css'));

}