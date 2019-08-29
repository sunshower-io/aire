import {
  inject,
  containerless,
  customElement
}                 from 'aurelia-framework';
import * as UIKit from "uikit";

@inject(Element)
@containerless
@customElement('aire-navbar')
export class AireNavbar {

  private container : HTMLElement;

  constructor(readonly el : Element) {

  }

  attached() : void {
    UIKit.navbar(this.container);
  }

}
