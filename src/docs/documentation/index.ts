import {
  HttpClient
} from "aurelia-fetch-client";

import {autoinject, bindable}                  from 'aurelia-framework';
import {NavModel, Router, RouterConfiguration} from "aurelia-router";
import {AireDrawer}                            from "aire/component/drawer";

@autoinject
export class Index {

  private currentPage: NavModel;

  @bindable showDrawer : boolean;

  private router : Router;
  private items : {
    name : string,
    components : string[]
  };


  constructor(readonly client : HttpClient) {

  }

  navigate(item : NavModel) {
    this.router.navigateToRoute(item.settings.category);
    this.hide();
  }

  navigateTo(c: any) {
    let page = this.currentPage,
      category = page.settings.category;
    this.router.navigateToRoute(page.settings.category, {
      category: category ,
      component: c.location || c.name
    });
  }



  show(item: NavModel) {
    this.currentPage = item;
    this.showDrawer = true;
  }

  hide() {
    this.showDrawer = false;
  }

  async configureRouter(cfg : RouterConfiguration, router : Router) {
    let resp = await this.client.fetch('output/assets.json'),
      items = await resp.json(),
      idx = items.groups;

    let  routes = idx.map(category => {
        return {
          title    : category.name,
          route    : category.name,
          name     : category.name,
          moduleId : './page',
          nav      : true,
          settings : {
            icon       : category.icon,
            category   : category.name,
            components : category.components
          }
        };
      }),
      fst = routes[0];
    fst.route = ['', fst.route];
    cfg.map(routes);
    this.router = router;
  }


}