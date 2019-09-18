import {
  customElement
}                       from 'aurelia-framework'
import {dom}            from "aire/core/dom";

import * as PerfectScrollbar from "perfect-scrollbar";

@customElement('aire-page')
export class AirePage {

  private page: HTMLElement;


  private scrollbar: any;

  constructor(readonly el:Element) {

  }

  bind() : void {
    dom.decorateTo(this.el, this.page, 'hero', 'hero');
    dom.decorateTo(this.el, this.page, 'padded', 'padded');
  }

  attached() : void {
    let scrollbar = PerfectScrollbar as any;
    this.scrollbar = new scrollbar(this.page);

  }

}
