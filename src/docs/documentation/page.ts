import {activationStrategy, ActivationStrategy, NavModel} from "aurelia-router";

export class Page {

  private title: string;


  activate(params:Object, id: NavModel) {
    this.title = id.settings.category;
  }

  determineActivationStrategy() : string {
    return activationStrategy.replace;
  }
}