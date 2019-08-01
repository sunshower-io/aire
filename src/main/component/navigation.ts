import {
  inject,
  bindable,
  customElement,
  bindingMode,
} from 'aurelia-framework';
import * as UIkit from 'uikit';
import {NavModel, Router} from 'aurelia-router';
import {dom}              from "aire/core/dom";


@inject(Element)
@customElement('aire-navigation')
export class AireNavigation {
  private child: boolean;

  @bindable plugins: Plugin[];

  @bindable
  plugin: Plugin;

  @bindable({
    defaultBindingMode: bindingMode.twoWay
  })
  activePlugin: Plugin;


  @bindable mode: Mode = 'routing';

  @bindable private nav: NavModel;

  @bindable
  private parent: AireNavigation;

  /**
   *
   */
  private viewModel: AireNavigation;

  /**
   *
   */
  @bindable label: string;

  /**
   *
   */
  @bindable router : Router;


  /**
   *
   */
  @bindable visible : boolean;


  /**
   *
   */
  @bindable
  icon : string = "fal fa-ellipsis-v-alt";


  constructor(readonly el: Element) {
    this.child = dom.decorate(el, 'child');
    this.viewModel = this;
  }


  bind() : void {
    let nav = this.nav;
    if(nav) {
      this.label = nav.title;
      this.icon = nav.settings && nav.settings.icon;
    }
  }


  attached() : void {

  }

  async navigate() {
    if(this.mode === 'routing') {
      let
        p = this.parent,
        r = this.router || (p && p.router),
        n = this.nav;
      if (r && n) {
        r.navigate(n.href);
      }
    } else {
      let p = this.parent;
      if(p)  {
        p.activePlugin = this.plugin;
      }


    }
    this.visible = false;
  }




}

export interface Plugin {
  root: string;
  icon: string;
}

export type Mode = 'routing' | 'plugin';
