// import 'aire/themes/dark/aire.css!'
import {PLATFORM}               from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

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
    'aire/component/tab-panel',
    'aire/component/label',

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

}