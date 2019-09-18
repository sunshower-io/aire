import {customAttribute} from 'aurelia-framework';
import * as UIkit        from "uikit";

@customAttribute('aire-grid')
export class AireGrid {

  constructor(readonly el:Element) {

  }

  attached() : void {
    UIkit.grid(this.el);
  }

}