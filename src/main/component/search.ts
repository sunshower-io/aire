import {
  bindable,
  customElement
}                 from 'aurelia-framework';
import * as UIkit from "uikit";
import Component = UIkit.Component;
import {debounce} from "aire/core/lang";
import {dom}      from "aire/core/events";

/**
 * @description
 * Flexible search widget
 *
 */
@customElement('aire-search')
export class AireSearch {


  /**
   * current value
   */
  @bindable public value : string;

  /**
   *
   */
  @bindable public open : boolean;

  /**
   *
   */
  @bindable public placeholder : string;


  /**
   * where we display results
   */
  private panel : HTMLDivElement;

  /**
   * input field
   */
  private input : HTMLInputElement;


  /**
   * Actual object
   */
  private dropPanel : Component;

  constructor(readonly el : Element) {

  }


  search(event) {
    let value = this.input.value,
      open = this.open;

    if (value && !open) {
      this.open = true;
      this.dropPanel.show();
    }

    if (!value) {
      this.dropPanel.hide();
      this.open = false;
    }
    this.value = value;
    this.dispatch(event);

  }

  private dispatch(e : InputEvent) : void {
    let evt = dom.createEvent('search', {
      value : this.value,
    });
    this.el.dispatchEvent(evt);
  }


  attached() : void {
    this.init();
  }

  private init() : void {
    if (!this.dropPanel) {
      this.dropPanel = UIkit.drop(this.panel, {
        mode : 'click'
      });
    }
  }

}