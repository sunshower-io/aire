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
        title    : "Users"
      }, {

        route    : 'groups',
        moduleId : './groups',
        nav      : true,
        name     : 'groups',
        title    : "Groups"
      },
      {

        route    : 'applications',
        moduleId : './applications',
        nav      : true,
        name     : 'applications',
        title    : "Applications"
      }
    ]);

    this.router = router;
  }

}