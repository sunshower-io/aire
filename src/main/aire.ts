import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg: FrameworkConfiguration) {
  
  cfg.globalResources([
    'aire/component/button',
    'aire/component/navigation',
    'aire/component/page'
  ]);
}