import {Router, RouterConfiguration} from "aurelia-router";

/**
 * @exclude
 */

export class DefaultPage {


  configureRouter(cfg: RouterConfiguration, router: Router) {
    cfg.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: './welcome'
      },
      {
        route: 'docs',
        name: 'docs',
        moduleId: './documentation/index'
      }
    ]);

  }

}