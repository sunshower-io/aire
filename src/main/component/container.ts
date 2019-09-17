import {
  inject,
  bindable,
  customAttribute,
}               from 'aurelia-framework';
import {dom}    from "aire/core/dom";
import {Strict} from "aire/core/lang";

/**
 *
 * <p class="uk-text-lead">
 *        This component allows you to align and center page content
 * </p>
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
 * .div
 * ..h1 small
 *
 * ..note
 * The padding of nested containers will be removed to avoid unnecessary spacing
 *
 * @section {Container in sections}
 *
 * You can use this attribute on elements within sections to modify the
 * width of the content inside sections from the Section component
 *
 * ..ex
 * section(aire-section primary large)
 * ..div(aire-container small)
 * ...h1 Section!
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
 */

@inject(Element)
@customAttribute('aire-container')
export class AireContainer {


  public static attributes: Map<string, string> = Strict.toMap<string, string>({
    "x-small": "uk-container-xsmall",
    "small": "uk-container-small",
    "large": "uk-container-large",
    "expand": "uk-container-expand"
  });

  constructor(readonly el : Element) {
    el.classList.add('uk-container');
    dom.setAttributes(el, AireContainer.attributes);
  }



}