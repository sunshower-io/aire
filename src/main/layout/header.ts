import {
  inject,
  containerless,
  customElement
}            from 'aurelia-framework'
import {
  AireViewport,
  ViewportComponent
}            from "aire/layout/viewport";
import {dom} from "aire/core/dom";

@containerless
@inject(Element, AireViewport)
@customElement('aire-header')
export class AireHeader extends ViewportComponent {

  private element:HTMLElement;
  private hasControl: boolean;

  constructor(readonly el: Element, viewport: AireViewport) {
    super(viewport, 'header');
    this.hasControl = true;

    // this.hasControl = el.hasAttribute('control');
  }


  attached() : void {
    super.attached();

    dom.decorateTo(this.el, this.viewport.main, 'small', 'h-small');
    dom.decorateTo(this.el, this.element, 'small', 'h-small');
  }


}
