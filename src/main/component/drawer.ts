import {
  bindable,
  autoinject,
  customElement
}                 from 'aurelia-framework';
import {debounce} from "aire/core/lang";


/**
 * @group frapper
 */
@autoinject
@customElement('aire-drawer')
export class AireDrawer {

  drawer : HTMLDivElement;


  /**
   * frapper
   *
   * don't you think so
   */
  @bindable public visible : boolean;


  /**
   *
   */

  private host : HTMLElement = document.body;

  /**
   *
   */

  @bindable width : number = 256;

  private listener : EventListenerOrEventListenerObject;

  constructor(readonly el:Element) {
  }


  attached() : void {
    this.listener = debounce(this.updateLeft, 5);
    window.addEventListener('resize', this.listener);
    this.setWidth(0);
  }

  detached() : void {
    window.removeEventListener('resize', this.listener);
  }

  async visibleChanged() {
    if (this.visible) {
      this.updateLeft();
    } else {
      this.setWidth(0);
    }
  }

  readonly updateLeft : () => void = async () => {
    this.setWidth(this.width);
  };


  private setWidth(w: number) {
    let drawer = this.el,
      host = this.host,
      style = (drawer as any).style;
    style.position = 'absolute';
    style.height = host.offsetHeight + 'px';
    style.left = host.offsetWidth + 'px';
    style.width = w + 'px';
  }

}

export type position =
  'left'
  | 'right'
  | 'top'
  | 'bottom';
