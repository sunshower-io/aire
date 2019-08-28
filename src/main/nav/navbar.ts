import {
  containerless,
  customElement
}                 from 'aurelia-framework'
import * as UIKit from "uikit";

@containerless
@customElement('aire-navbar')
export class AireNavbar {

  private el:HTMLElement;

  attached() : void {
    console.log("SUP");
    UIKit.navbar(this.el);
  }

}
