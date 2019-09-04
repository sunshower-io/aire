import {
  bindable,
  autoinject,
  customElement
}                 from 'aurelia-framework';
import {debounce} from "aire/core/lang";

import {VelocityAnimator} from 'aurelia-animator-velocity';


@autoinject
@customElement('aire-drawer')
export class AireDrawer {

  drawer : HTMLDivElement;


  /**
   *
   */
  @bindable public visible : boolean;


  /**
   *
   */

  private host : HTMLElement = document.body;

  /**
   *
   */

  @bindable width : number = 400;

  private listener : EventListenerOrEventListenerObject;

  constructor(readonly animator : VelocityAnimator) {
  }


  attached() : void {
    this.listener = debounce(this.updateLeft, 5);
    window.addEventListener('resize', this.listener);
    this.drawer.style.width = 0 + 'px';
  }

  detached() : void {
    window.removeEventListener('resize', this.listener);
  }

  async visibleChanged() {
    if (this.visible) {
      this.updateLeft();
    } else {

      await this.animator.animate(this.drawer, {
        width: 0,
      }, {
        duration: 0.2
      });
    }
  }

  readonly updateLeft : () => void = async () => {
    let drawer = this.drawer,
      host = this.host,
      style = drawer.style;
    style.position = 'absolute';
    style.height = host.offsetHeight + 'px';
    style.left = host.offsetWidth + 'px';

    await this.animator.animate(this.drawer, {
      width:this.width,
    }, {
      duration: 0.2
    });
  };


}

export type position =
  'left'
  | 'right'
  | 'top'
  | 'bottom';
