import {
  children,
  customElement
}                 from 'aurelia-framework';
import * as UIKit from "uikit";
import {AireTab}  from "aire/component/tab";


@customElement('aire-tab-panel')
export class AireTabPanel {

  private header: HTMLUListElement;

  private contents: HTMLDivElement;

  @children('aire-tab')
  private tabs: AireTab[];

  private element:HTMLDivElement;


  constructor(readonly el: Element) {

  }

  attached() : void {

    let tabs = this.tabs;
    if(tabs) {
      for(let tab of tabs) {
        let theader = document.createElement('li'),
          href = document.createElement('a');
        href.innerHTML = tab.title;
        theader.appendChild(href);
        this.header.appendChild(theader);
      }
    }
    UIKit.tab(this.header);
  }
}