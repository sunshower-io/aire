import {
  inject,
  bindable,
  containerless,
  customElement
}                    from 'aurelia-framework';
import {createEvent} from "aire/core/events";
import {dom}         from "aire/core/dom";
import {
  ButtonModifier, ButtonRole
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
    'control'
  ];


  /**
   * Mode button?
   */
  private button : HTMLButtonElement;

  /**
   * Mode anchor?
   */
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
  role : ButtonRole = 'link';

  modifier : ButtonModifier = 'default';


  /**
   * Is this button disabled?
   */
  @bindable disabled : boolean;


  constructor(private el : Element) {
    dom.decorate(el, 'expand');
    this.role = el.hasAttribute('link') ? 'link' : 'button';
    this.modifier = AireButton.modifierFor(el);
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
    this.decorate();
    this.updateModifiers();
  }

  private updateModifiers() {
    switch (this.role) {
      case 'button':
        if(this.modifier == 'control') {
          this.button.classList.add('control');
        }
        this.anchor.remove();
        break;
      case 'link':
        if(this.modifier == 'control') {
          this.anchor.classList.add('control');
        }
        this.button.remove();
        break;
      default:
        throw new Error("Unknown button role for modifier: " + this.role);
    }
  }

  private decorate() {
    console.log(this.el.hasAttribute('text'));
    for (let modifier of AireButton.modifiers) {
      dom.decorateTo(
        this.el,
        this.anchor,
        modifier,
        `uk-button-${modifier}`
      );
    }
  }

  private static modifierFor(el : Element) : ButtonModifier {
    for (let mod of AireButton.modifiers) {
      if (el.hasAttribute(mod)) {
        return mod as ButtonModifier;
      }
    }
    return 'default';
  }

}