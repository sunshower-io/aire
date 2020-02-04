import {
  inject,
  containerless,
  customElement
}                 from 'aurelia-framework';
import * as UIKit from "uikit";
import {dom}      from "aire/core/dom";

@inject(Element)
@containerless
@customElement('aire-navbar')
export class AireNavbar {

  private container : HTMLElement;

  constructor(readonly el : Element) {

  }

  attached() : void {
    UIKit.navbar(this.container);
    dom.decorateTo(this.el, this.container, 'light');
    dom.decorateTo(this.el, this.container, 'small');
    dom.decorateTo(this.el, this.container, 'rotate');
    dom.decorateTo(this.el, this.container, 'right');
  }

}
