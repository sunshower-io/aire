import {
  bindable,
  autoinject,
  customElement
}                 from 'aurelia-framework';
import {debounce} from "aire/core/lang";

import * as PerfectScrollbar from "perfect-scrollbar";

@autoinject
@customElement('aire-drawer')
export class AireDrawer {

  drawer : HTMLDivElement;


  /**
   */
  @bindable public visible : boolean;

  /**
   * widths of the drawer
   */
  @bindable width : number = 256;

  /**
   * Container for drawer contents
   */
  private body : HTMLDivElement;


  private scrollbar : any;
  /**
   * where are we attached?
   */

  private host : HTMLElement = document.body;

  /**
   * Resize listener
   */
  private listener : EventListenerOrEventListenerObject;


  constructor(readonly el : Element) {
  }


  attached() : void {
    this.listener = debounce(this.visibleChanged.bind(this), 5);
    window.addEventListener('resize', this.listener);
    let scrollbar = PerfectScrollbar as any;
    this.scrollbar = new scrollbar(this.body);
    this.setWidth(0);

  }


  detached() : void {
    this.scrollbar.destroy();
    window.removeEventListener('resize', this.listener);
  }


  doRefresh() : void {
    this.scrollbar.update();
  }


  async visibleChanged() {
    if (this.visible) {
      this.updateLeft();
    } else {
      this.setWidth(0);
    }
  }

  updateLeft() : void {
    this.setWidth(this.width);
  };


  private setWidth(w : number) {
    let drawer = this.el,
      host = this.host,
      style = (drawer as any).style;
    style.position = 'absolute';
    style.height = host.offsetHeight + 'px';
    style.left = host.offsetWidth + 'px';
    style.widths = w + 'px';
    this.scrollbar.update();
  }

}

export type position =
  'left'
  | 'right'
  | 'top'
  | 'bottom';
