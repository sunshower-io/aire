import {
  HttpClient
} from "aurelia-fetch-client";

import {
  autoinject,
  bindable
}                  from 'aurelia-framework';
import {
  activationStrategy,
  NavigationInstruction,
  NavModel, RouteConfig,
  Router,
  RouterConfiguration
} from "aurelia-router";


/**
 * @exclude
 */


@autoinject
export class Index {

  private currentPage: NavModel;

  @bindable showDrawer : boolean;

  private router : Router;
  private items : {
    name : string,
    components : string[]
  };

  public currentItem: {
    icon?: string,
    name?: string;
    category?: string;
  };


  constructor(readonly client : HttpClient) {

  }

  async navigate(item : NavModel | string) {
    if( typeof item === 'string') {
      await this.router.navigateToRoute(item);
    } else {
      let category : string;
      category = item.settings.category;
      await this.router.navigateToRoute(category, {category: category});
    }
    this.hide();
  }

  async navigateTo(c: any) {
    let page = this.currentPage,
      name = c.location || c.name,
      category = c.category || page.settings.category;
    await this.router.navigateToRoute(category, {
      category: category ,
      component: name
    });
    this.currentItem = {
      category: category,
      name: name
    };
    this.hide();
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
    this.currentItem = {category: fst.settings.category};
    cfg.map(routes);
    this.router = router;
  }


  async activate(params : any, cfg: RouteConfig, instruction: NavigationInstruction) {
    if(params.category) {
      this.currentItem = {
        icon     : cfg.settings.icon,
        name     : params.component,
        category : params.category
      };
    }
  }


  determineActivationStrategy() : string {
    return activationStrategy.replace;
  }


}