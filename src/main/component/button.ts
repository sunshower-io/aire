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


/**
 *
 *
 */


@inject(Element)
@customElement('aire-button')
export class AireButton {

  /**
   * hello
   */

  public static modifiers : string[] = [
    'default',
    'primary',
    'secondary',
    'danger',
    'text',
    'control',
    'link'
  ];

  public static sizes : string[] = [
    'small',
    'large'
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

  @bindable public label : string;

  /**
   * Optional link
   */
  @bindable public href : string;

  /**
   * Active?
   */
  @bindable public active: boolean;

  /**
   * The style of the button
   */
  private role : ButtonRole = 'button';



  /**
   * What kind of button are we?
   */

  private modifier : ButtonModifier = 'default';


  /**
   * Is this button disabled?
   */
  @bindable public disabled : boolean;


  constructor(private el : Element) {
    dom.decorate(el, 'expand');
    this.role = !!
      (el.getAttribute("href") ||
        el.getAttribute('href.bind'))
                ? 'link' : 'button';
    this.modifier = AireButton.modifierFor(el);
  }


  created() : void {
    let el = this.el;
    switch (this.role) {
      case 'button': {
        let remove = el.childNodes.item(0),
          target = el.childNodes.item(1),
          slot = el.childNodes.item(2);
        remove.remove();
        target.appendChild(slot);


        break;
      }
      case 'link' : {
        let remove = el.childNodes.item(1),
          target = el.childNodes.item(0),
          slot = el.childNodes.item(2);
        remove.remove();
        target.appendChild(slot);
        break;
      }

    }
  }


  dispatch(e : Event) : void {
    console.log(this.active);
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
        if (this.modifier == 'control') {
          this.button.classList.add('control');
        }
        break;
      case 'link':
        if (this.modifier == 'control') {
          this.anchor.classList.add('control');
        }
        break;
      default:
        throw new Error("Unknown button role for modifier: " + this.role);
    }
  }

  private decorate() {
    let target = this.role == 'link' ? this.anchor : this.button,
      found = this.extractModifiers(target, AireButton.modifiers);
    if (!found) {
      target.classList.add('uk-button-default');
    }
    this.extractModifiers(target, AireButton.sizes);

  }

  private extractModifiers(target:HTMLElement, modifiers: string[]) {
    for (let modifier of AireButton.modifiers) {
      if(dom.decorateTo(
        this.el,
        target,
        modifier,
        `uk-button-${modifier}`
      )) {
        return true;
      }
    }
    return false;
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