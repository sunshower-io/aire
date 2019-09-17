import {
  customElement
}                 from 'aurelia-framework';
import * as UIKit from "uikit";


@customElement('aire-tab-panel')
export class AireTabPanel {

  tabs: HTMLUListElement;

  contents: HTMLDivElement;

  attached() : void {
    // UIKit.switcher(this.contents);


  }

}