import {
  customElement
}                       from 'aurelia-framework'
import {dom}            from "aire/core/dom";

import * as PerfectScrollbar from "perfect-scrollbar";
import {Aire}                from "aire/core/aire";

@customElement('aire-page')
export class AirePage {

  private page: HTMLElement;

  private scrollable: boolean;

  private scrollbar: any;

  constructor(readonly el:Element) {

  }

  bind() : void {
    dom.decorateTo(this.el, this.page, 'hero', 'hero');
    dom.decorateTo(this.el, this.page, 'padded', 'padded');
    dom.decorateTo(this.el, this.page, 'expand');
    this.scrollable = !this.el.hasAttribute('no-scroll');
  }

  attached() : void {
    let self = this;
    Aire.enqueue(() => {
      if(self.scrollable) {
        let scrollbar = PerfectScrollbar as any;
        self.scrollbar = new scrollbar(self.page);
      }
    });
  }

}
