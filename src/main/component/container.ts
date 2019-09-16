import {
  inject,
  bindable,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";

/**
 *
 * <p class="uk-text-lead">
 *        This component allows you to align and center page content
 * </p>
 *
 *
 *
 * @section {Usage}
 * ..ex
 *
 * hello
 * .world
 * ..how are you?
 *
 * ..note
 *
 * This is a cool test
 *
 *
 * ```this is another cool test```
 *
 * ..ex
 *
 * @section {Frapper}
 * This is whateverp
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