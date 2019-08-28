import {
  inject,
  containerless,
  customElement
}                                        from 'aurelia-framework'
import {
  AireViewport,
  ViewportComponent
} from "aire/layout/viewport";

@containerless
@inject(AireViewport)
@customElement('aire-header')
export class AireHeader extends ViewportComponent {

  constructor(viewport: AireViewport) {
    super(viewport, 'header');
    console.log("HE");
  }

}
