import {
  child,
  inject,
  bindable,
  processContent,
  Container,
  ViewSlot,
  View,
  OverrideContext,
  TargetInstruction,
  DOM,
  customElement
}                   from 'aurelia-framework';
import {AireHeader} from "aire/layout/header";
import {AireFooter} from "aire/layout/footer";

// @processContent(compilePanel)
@customElement('aire-panel')
@inject(Element, Container, ViewSlot, TargetInstruction)
export class AirePanel {

  /**
   * internal state
   */
  private bound : boolean;

  private bindingContext : Object;

  private overrideContext : OverrideContext;
  /**
   * DOM state
   */
  /**
   * does this panel have a header?  Can be null
   */
  @child('header')
  private _header : AireHeader;

  /**
   * does this panel have a footer?  Can be null
   */
  @child('footer')
  private _footer : AireFooter;

  /**
   * bindable state
   */

  @bindable
  public visible : boolean = true;


  private view : View;
  public readonly contentFactory : any;


  constructor(
    readonly el : Element,
    readonly container : Container,
    readonly viewSlot : ViewSlot,
    readonly instruction : TargetInstruction
  ) {
    this.contentFactory = instruction.elementInstruction.contentFactory;
  }


  public show() : void {
    this.visible = true;
  }

  public hide() : void {
    this.visible = false;
  }

  public get header() : AireHeader {
    return this._header;
  }

  public get footer() : AireFooter {
    return this._footer;
  }

  created(owningView, currentView) : void {
    console.log("Whaddup", owningView, currentView);
  }
  attached() {
    console.log("Sup");
  }

}

