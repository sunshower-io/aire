import {
  bindable,
  customElement
} from 'aurelia-framework';

/**
 * @description
 * General-purpose image class
 *
 *
 */

@customElement('aire-image')
export class AireImage {

  /**
   * URL of the image
   */
  @bindable
  source : string;

  /**
   * Width of the icon
   */
  @bindable width : string = '32px';


  /**
   * Height of the icon
   */
  @bindable height : string = '32px';


  /**
   * Allows you to set a dimension and a ratio.  For example,
   * width = 32, ratio = 4 will result in height = 128
   */
  @bindable ratio : number;

  bind() {
    let w = parseFloat(this.width),
      h = parseFloat(this.height),
      r = this.ratio;
    if(r) {
      if(!w) {
        this.height = r * w + 'px';
      }
      if(!h) {
        this.width = r * h + 'px';
      }
    } else {
      if(!w && h) {
        this.height = w + 'px';
      } else if(!h && w) {
        this.width = h + 'px';
      }
    }
  }

}