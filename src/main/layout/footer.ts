import {
  inject,
  containerless,
  customElement
}            from 'aurelia-framework';
import {
  AireViewport,
  ViewportComponent
}            from "aire/layout/viewport";
import {dom} from "aire/core/dom";

@containerless
@inject(Element, AireViewport)
@customElement('aire-footer')
export class AireFooter extends ViewportComponent {

  private element : HTMLElement;

  constructor(readonly el : HTMLElement, viewport : AireViewport) {
    super(viewport, 'footer');
  }

  attached() : void {
    super.attached();
    dom.decorateTo(this.el, this.viewport.main, 'large', 'f-large');
    dom.decorateTo(this.el, this.element, 'large', 'f-large');
  }

}

