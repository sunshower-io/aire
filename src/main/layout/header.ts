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
@customElement('aire-header')
export class AireHeader extends ViewportComponent {

  private hasControl : boolean;


  protected element : HTMLElement;

  constructor(readonly el : Element, viewport : AireViewport) {
    super(viewport, {region : 'header', size : 'small'});
    this.hasControl = true;
  }





}
