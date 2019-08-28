import {
  inject,
  bindable,
  containerless,
  customElement
}                    from 'aurelia-framework';
import {createEvent} from "aire/core/events";
import {dom}         from "aire/core/dom";
import {
  ButtonModifier
}                    from "aire/component/modifiers";


@inject(Element)
@containerless
@customElement('aire-button')
export class AireButton {

  public static modifiers : string[] = [
    'default',
    'primary',
    'secondary',
    'danger',
    'text',
    'link'
  ];

  private anchor : HTMLAnchorElement;
  /**
   * The text of the button/link
   */

  @bindable label : string;

  /**
   * Optional link
   */
  @bindable href : string;

  /**
   * The style of the button
   */
  @bindable type : ButtonModifier = 'link';


  /**
   * Is this button disabled?
   */
  @bindable disabled : boolean;


  constructor(private el : Element) {
    dom.decorate(el, 'expand');
  }

  dispatch(e : Event) : void {
    if (!this.disabled) {
      this.el.dispatchEvent(createEvent('click', {
        cause  : e,
        source : this
      }));
    }
  }

  bind() {
    for (let modifier of AireButton.modifiers) {
      dom.decorateTo(
        this.el,
        this.anchor,
        modifier,
        `uk-button-${modifier}`
      );
    }

  }

}