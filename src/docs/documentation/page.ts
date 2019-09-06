import {activationStrategy, ActivationStrategy, NavigationInstruction, NavModel, RouteConfig} from "aurelia-router";
import {bindable}                                                                             from 'aurelia-framework';

export class Page {

  private title : string;

  @bindable checked : boolean;


  private components : Map<ComponentType, Component[]>;

  checkMe() : void {
    this.checked = true;
  }

  activate(params : Object, config : RouteConfig, instruction : NavigationInstruction) {
    this.title = config.title;
    this.components = config.settings.components.reduce((
      acc: Map<ComponentType, Component[]>,
      current: Component) => {

      let existing = acc.get(current.type);
      if(!existing) {
        existing = [];
        acc.set(current.type, existing);
      }
      existing.push(current);
      return acc;
    }, new Map<ComponentType, Component[]>());
    console.log(this.components);

  }


  determineActivationStrategy() : string {
    return activationStrategy.replace;
  }
}

type ComponentType = 'function' | 'class';

interface Component {

  type : ComponentType;
  name : string;
  icon : string;
}