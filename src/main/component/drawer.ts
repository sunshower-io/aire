import {
  bindable,
  autoinject,
  customElement
}                 from 'aurelia-framework';
import {debounce} from "aire/core/lang";

import * as PerfectScrollbar from "perfect-scrollbar";
import {dom}                 from "aire/core/dom";

@autoinject
@customElement('aire-drawer')
export class AireDrawer {

  drawer : HTMLDivElement;


  /**
   */
  @bindable public visible : boolean;

  /**
   * width of the drawer
   */
  @bindable width : number = 256;

  /**
   * direction to open
   */
  @bindable private opens : position;

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
    this.el.classList.add(this.opens);
  }


  detached() : void {
    this.scrollbar.destroy();
    window.removeEventListener('resize', this.listener);
  }


  doRefresh() : void {
    this.scrollbar.update();
  }


  visibleChanged() {
    if (this.opens) {

      if(this.visible) {
        this.updateRight();
      } else {
        this.setWidth(0);
      }

    } else {
      if (this.visible) {
        this.updateLeft();
      } else {
        this.setWidth(0);
      }
    }
  }

  updateRight() : void {

    let drawer = this.el,
      host = this.host,
      w = this.width || 400,
      style = (drawer as any).style;
    style.right = '32px';
    style.position = 'absolute';
    style.height = host.offsetHeight + 'px';
    style.left = -w + 'px';
    style.width = w + 'px';
    style.top = 0;
    this.scrollbar.update();
  };

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
    style.width = w + 'px';
    this.scrollbar.update();
  }

}

export type position =
  'left'
  | 'right'
  | 'top'
  | 'bottom';
