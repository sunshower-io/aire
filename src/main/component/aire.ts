
import {customAttribute} from 'aurelia-framework';
import {dom}             from "aire/core/dom";
import {Strict}          from "aire/core/lang";

/**
 * @description
 * Utility attribute for translating classes
 */
@customAttribute('aire')
export class Aire {

  static readonly skip: Map<string, boolean> = Strict.toMap({
    'class': true,
    'au-target-id': true
  });

  constructor(el: Element) {
    for(let attr of el.getAttributeNames()) {
      if(!Aire.skip.get(attr)) {
        dom.decorate(el, attr, `uk-${attr}`);
      }
    }

  }
}