
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
 * @description
 * Utility attribute for translating classes
 *
 * @section {Usage}
 *
 * Add the `aire` class along with a set of `uikit` classess to style an
 * element with.  For example,
 *
 * ..ex
 * div(aire inline margin widths-1-1 height-large)
 * .div(aire position-top)
 * ..h2(aire-text-success) top
 * .div(aire position-bottom-center)
 * ..h2(aire text-error) bottom-center
 * .div(aire position-right)
 * ..h2(aire text-warning) right
 *
 * ..note
 * Some special classes are ignored.  This attribute does not report when an
 * ignored attribute is provided
 *
 * ..attr
 * {any uikit class}  Add with this element
 *
 *
 *
 *
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