import {
  inject,
  bindable,
  customElement
}                       from 'aurelia-framework';
import {createEvent}    from "aire/core/events";
import {ButtonModifier} from "aire/component/modifiers";


@inject(Element)
@customElement('aire-button')
export class AireButton {

  /**
   * The text of the button/link
   */
  
  @bindable label: string = "whatever";

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
  }

  dispatch(e: Event) : void {
    this.el.dispatchEvent(createEvent('click', {
      cause: e,
      source: this
    }))
  }

}