import {
  inject,
  bindable,
  customElement
}                       from 'aurelia-framework';
import {createEvent}    from "aire/core/events";
import {ButtonModifier} from "aire/component/modifiers";
import {dom}            from "aire/core/dom";


@inject(Element)
@customElement('aire-button')
export class AireButton {

  /**
   * The text of the button/link
   */
  
  @bindable label: string;

  /**
   * Optional link
   */
  @bindable href: string;
  
  /**
   * The style of the button
   */
  @bindable type: ButtonModifier;


  /**
   * Is this button disabled?
   */
  @bindable disabled: boolean;


  constructor(private el: Element) {
    dom.decorate(el, 'expand');
  }
  click() {
    console.log("SUP");
    this.label = "sup";
  }

  dispatch(e: Event) : void {
    if(!this.disabled) {
      this.el.dispatchEvent(createEvent('click', {
        cause  : e,
        source : this
      }));
    }
  }

}