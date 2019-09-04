import {activationStrategy, ActivationStrategy, NavModel} from "aurelia-router";
import {bindable} from 'aurelia-framework';

export class Page {

  private title: string;

  @bindable checked: boolean;


  checkMe() : void {
    this.checked = true;
  }

  activate(params:Object, id: NavModel) {
    this.title = id.settings.category;
  }

  determineActivationStrategy() : string {
    return activationStrategy.replace;
  }
}