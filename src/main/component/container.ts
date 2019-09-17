import {
  inject,
  bindable,
  customAttribute,
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";

/**
 *
 * <p class="uk-text-lead">
 *        This component allows you to align and center page content
 * </p>
 *
 *
 *
 * @section {Usage}
 *
 *
 * Add the `aire-container` attribute class to a block element to give it a max-width and wrap
 * the main content of that element.  The element will automatically be centered within its parent
 * and have padding on the sides that adapts automatically for large screens.
 *
 *
 * ..ex
 * div(aire-container small)
 *
 * ..note
 * The padding of nested containers will be removed to avoid unnecessary spacing
 *
 * @section {Wabbwab}
 *
 * ```javascript
 * function(a, b) {
 *
 * }
 *
 * ```
 *
 *
 * ..note
 * This is a note!
 *
 *
 *
 *
 * @section {Size Modifiers}
 *
 * Add one of the following attributes to the container to apply a different width
 *
 *
 * ..attr
 * {xsmall} Add this class for a extra-small container
 *
 * ..attr
 * {small} Add this class for a small container
 *
 * ..attr
 * {large} Add this class for a large container
 *
 * ..attr
 * {expand} Add this class if you do not want to limit the container width but still want the dynamic horizontal padding
 *
 * ..attr
 * {frap} that baloo is a wap
 *
 */

@inject(Element)
@customAttribute('aire-container')
export class AireContainer {


  constructor(readonly el : Element) {
    el.classList.add('uk-container');
    dom.decorate(this.el, 'x-small', 'uk-container-xsmall');
    dom.decorate(this.el, 'small', 'uk-container-small');
    dom.decorate(this.el, 'large', 'uk-container-large');
    dom.decorate(this.el, 'expand', 'uk-container-expand');

  }



}