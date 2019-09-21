
import {customAttribute} from 'aurelia-framework';
import {dom}             from "aire/core/dom";
import {Strict}          from "aire/core/lang";

/**
 *
 * <p class="uk-text-lead">
 * The Aire attribute is useful for
 * succinctly translating Aire attributes into UiKit classes, etc.
 * </p>
 *
 * @section {Usage}
 *
 * Add the `aire` class along with a set of `uikit` classess to style an element with.  For example,
 *
 * ..ex
 * div(aire-container small)
 * .div
 * ..h1 small
 *
 * ..note
 * Some special classes are ignored.  This attribute does not report when an
 * ignored attribute is provided
 *
 *
 *
 *
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