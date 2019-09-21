import {Router, RouterConfiguration} from "aurelia-router";

/**
 * @excluded
 */
export class PageIndex {

  router : Router;


  configureRouter(cfg : RouterConfiguration, router : Router) {
    cfg.map([
      {
        route    : ['', 'rbac'],
        moduleId : './rbac',
        nav      : true,
        name     : 'rbac',
        title    : "Roles"
      }, {

        route    : 'groups',
        moduleId : './groups',
        nav      : true,
        name     : 'groups',
        title    : "Groups"
      }
    ]);

    this.router = router;
  }

}