import {
  inject,
  autoinject,
  containerless,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";

@autoinject
@containerless
@customElement('navbar-location')
export class NavbarLocation {

  private contents : HTMLDivElement;

  constructor(readonly el : Element) {
  }

  attached() {
    let el = this.el;
    dom.decorateTo(el, this.contents, 'left', 'uk-navbar-left');
    dom.decorateTo(el, this.contents, 'right', 'uk-navbar-right');
    dom.decorateTo(el, this.contents, 'center', 'uk-navbar-center');
    dom.decorateTo(el, this.contents, 'control', 'control');


  }

}

