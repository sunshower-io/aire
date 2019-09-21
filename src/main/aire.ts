// import 'aire/themes/dark/aire.css!'
import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';
import {Aire}                   from "aire/core/aire";

export const components = [
    /**
     * Components
     */

    'aire/component/image',
    'aire/component/button',
    'aire/component/tooltip',
    'aire/component/position',
    'aire/component/drawer',
    'aire/component/host',
    'aire/component/checkbox',
    'aire/component/list',
    'aire/component/loader',
    'aire/component/container',
    'aire/component/markdown',
    'aire/component/panel',
    'aire/component/tab',
    'aire/component/tab-panel',
    'aire/component/label',
    'aire/component/code',
    'aire/component/section',
    'aire/component/aire',
    'aire/component/search',
    'aire/component/grid',

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
    'aire/nav/navbar',
    'aire/nav/location',
    'aire/core/iterable',

];
export function configure(cfg : FrameworkConfiguration) {
  cfg.globalResources(components)
     .plugin(PLATFORM
       .moduleName('aurelia-animator-velocity'));

  Aire.initialize(cfg.aurelia);
}