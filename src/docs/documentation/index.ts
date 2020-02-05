import {
  HttpClient
} from "aurelia-fetch-client";

import * as Identicon from "jdenticon";
import * as Fuse from 'fuse.js';

import {
  autoinject,
  bindable
}                         from 'aurelia-framework';
import {
  activationStrategy,
  NavigationInstruction,
  NavModel, RouteConfig,
  Router,
  RouterConfiguration
}                         from "aurelia-router";
import {debounce, Strict} from "aire/core/lang";


/**
 * @exclude
 */


@autoinject
export class Index {

  private currentPage : NavModel;

  @bindable showDrawer : boolean;

  private router : Router;
  private items : {
    name : string,
    components : string[]
  };

  public currentItem : {
    icon? : string,
    name? : string;
    category? : string;
  };
  private search : Fuse<any, any>;


  constructor(readonly client : HttpClient) {

  }

  async navigate(item : NavModel | string) {
    if (typeof item === 'string') {
      await this.router.navigateToRoute(item);
    } else {
      let
        settings = item.settings,
        category = settings && item.settings.category;
      if(category) {
        await this.router.navigateToRoute(category, {category : category});
      } else {
        await this.router.navigateToRoute(item.config.route as any);
      }
    }
    this.hide();
  }

  async navigateTo(c : any) {
    let page = this.currentPage,
      name = c.location || c.name,
      category = c.category || page.settings.category;
    await this.router.navigateToRoute(category, {
      category  : category,
      component : name
    });
    this.currentItem = {
      category : category,
      name     : name
    };
    this.hide();
  }


  show(item : NavModel) {
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

    this.index(items);
    let routes = idx.map(category => {
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

    routes.unshift({
      title: 'test',
      route: 'pages',
      name: 'pages',
      moduleId: '../pages/index',

      nav: true,
      settings : {
        icon: 'fal fa-sticky-note',
        components: []
      }

    }, {
      title: 'designer',
      route: 'designer',
      name: 'designer',
      moduleId: "../designer/index",
      nav: true,
      settings : {
        icon: 'fal fa-drafting-compass',
        components: []
      }
    });
    fst.route = ['', fst.route];
    this.currentItem = {category : fst.settings.category};
    cfg.map(routes);
    this.router = router;
  }


  icon() : string {
    return btoa(Identicon.toSvg("helloworld", 64))
  }
  private index(items : any) {
    let options = {
      shouldSort         : true,
      threshold          : 0.4,
      location           : 0,
      distance           : 100,
      maxPatternLength   : 32,
      minMatchCharLength : 1,
      keys               : [
        "name",
        "category",
        "type",
        "description"
      ]
    };


    this.search = new Fuse(this.transform(items), options); // "list" is the item array

  }

  results: any[];

  performSearch(event : CustomEvent) {
    let search = this.search;
    this.results = search.search(event.detail.value);
  }

  private transform(items : any) : any[] {
    if (items && items.groups) {
      let groups = items.groups;
      return Strict.flatMap(g => {
        let gname = g.name;
        return g.components.map(t => {
          return {
            category: gname,
            type        : t.type,
            name        : t.name,
            description : t.description,
            icon: t.icon,
            location: t.location
          };
        });


      }, groups);

    }
    return [];
  }


  async activate(params : any, cfg : RouteConfig, instruction : NavigationInstruction) {
    if (params.category) {
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