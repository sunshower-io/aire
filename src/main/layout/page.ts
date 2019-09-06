import {
  customElement
}            from 'aurelia-framework'
import {dom} from "aire/core/dom";

@customElement('aire-page')
export class AirePage {

  private page: HTMLElement;

  constructor(readonly el:Element) {

  }

  bind() {
    dom.decorateTo(this.el, this.page, 'hero', 'hero');
    dom.decorateTo(this.el, this.page, 'padded', 'padded');
  }

}
