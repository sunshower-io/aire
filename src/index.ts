import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        './layout', 
        './layout/component', 
        './layout/row',
        './base/header',
        './components/text-field',
        './components/toolbar',
        './components/card'
    ]);
}
