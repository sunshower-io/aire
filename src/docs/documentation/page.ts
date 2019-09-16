import {
  activationStrategy,
  NavigationInstruction,
  RouteConfig
} from "aurelia-router";

import {
  bindable,
  inject,
} from 'aurelia-framework';

import {
  HttpClient
} from "aurelia-fetch-client";

@inject(HttpClient)
export class Page {

  /**
   * private state
   */

  private title : string;

  private mode: 'page' | 'component';

  private components : Map<ComponentType, Component[]>;


  /**
   * public state
   */
  @bindable public checked : boolean;


  component: Component;


  constructor(readonly client: HttpClient) {

  }

  checkMe() : void {
    this.checked = true;
  }

  async activate(params : any, config : RouteConfig, instruction : NavigationInstruction) {
    this.title = config.title;
    this.partition(config);
    if(params.component) {
      await this.loadComponent(params);
    } else {
      await this.loadPage(params);
    }

  }

  private partition(config: RouteConfig) {
    this.components = config.settings.components.reduce((
      acc : Map<ComponentType, Component[]>,
      current : Component
    ) => {

      let existing = acc.get(current.type);
      if (!existing) {
        existing = [];
        acc.set(current.type, existing);
      }
      existing.push(current);
      return acc;
    }, new Map<ComponentType, Component[]>());

  }


  async loadPage(params: any) : Promise<void> {
    this.mode = 'page';
  }

  async loadComponent(params: any) : Promise<void> {
    let resp = await this.client.fetch(
      `output/main/${params.category}/${params.component}.json`),
      result = await resp.json();

    this.mode = 'component';
    this.component = result;
  }


  determineActivationStrategy() : string {
    return activationStrategy.replace;
  }
}

type ComponentType = 'function' | 'class';

interface Component {

  group: string;
  location: string;
  base: string;
  type : ComponentType;
  name : string;
  icon : string;
  properties: Property[];
}

interface Property {
  location: string;
  label: string;
  type: string;
  comments: string;
}