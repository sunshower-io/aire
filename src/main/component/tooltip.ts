import {
  inject,
  customAttribute
}                     from 'aurelia-framework';
import {Positionable} from "aire/component/positionable";
import * as UIkit     from "uikit";

@inject(Element)
@customAttribute('tooltip')
export class AireTooltip implements Positionable {

  value: string;

  position: UIkit.TooltipPosition = 'right';


  constructor(readonly el: HTMLElement) {

  }



  attached() : void {
    UIkit.tooltip(this.el, {
      title: this.value,
      pos: this.position,
      position: this.position
    } as any);
  }




}