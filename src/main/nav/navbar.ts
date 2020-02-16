import {
  inject,
  bindable,
  customElement,
  children,
  TemplatingEngine
} from 'aurelia-framework';

import * as UIKit   from "uikit";
import {dom}        from "aire/core/dom";
import {AirePanel}  from "aire/component/panel";
import {AireButton} from "aire/component/button";

@inject(TemplatingEngine, Element)
@customElement('aire-navbar')
export class AireNavbar {

  private container : HTMLElement;

  @children('aire-panel')
  private panels : AirePanel[];
  private controls : AireButton[];

  private content: HTMLDivElement;


  /**
   *
   */
  @bindable private target: any;


  constructor(readonly engine : TemplatingEngine, readonly el : Element) {
    this.controls = [];
  }
  bind() : void {
    console.log("BIND", this.panels);
  }

  attached() : void {
    this.configure();
    if (this.panels) {
      this.configurePanels(this.panels);
    }
  }

  public open(panel: AirePanel) : void {

  }


  private configurePanels(panels : AirePanel[]) : void {
    for (let panel of panels) {
      panel.hide();
    }
  }



  private configure() : void {
    UIKit.navbar(this.container);
    dom.decorateTo(this.el, this.container, 'light');
    dom.decorateTo(this.el, this.container, 'small');
    dom.decorateTo(this.el, this.container, 'rotate');
    dom.decorateTo(this.el, this.container, 'right');
  }
}
