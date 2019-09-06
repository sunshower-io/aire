import {
  inject,
  bindable,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";

/**
 *
 * ## This component allows you to align and center your page content
 *
 *
 * ### Usage
 * `hai wab`
 *
 */

@inject(Element)
@customElement('aire-container')
export class AireContainer {



  container: HTMLDivElement;


  @bindable
  public top: string;


  constructor(readonly el:Element) {

  }


  public bind() : void {
    dom.decorateTo(this.el, this.container, 'x-small', 'uk-container-xsmall');
    dom.decorateTo(this.el, this.container, 'small', 'uk-container-small');
    dom.decorateTo(this.el, this.container, 'large', 'uk-container-large');
    dom.decorateTo(this.el, this.container, 'expand', 'uk-container-expand');
  }


}