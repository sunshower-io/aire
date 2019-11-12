import {
    inject,
    bindable,
    customElement} from 'aurelia-framework';
import {dom} from "aire/core/dom";

/**
 *  <p class="uk-text-lead">This component allows you to nicely style lists</p>
 *
 *  @description
 *  Custom element for creating lists
 *
 * @section {Usage}
 *
 * The `aire-list` is an list with the standard list styling removed. Providing the `ordered` attribute will make it an ordered list. (The default is unordered.)
 *
 *
 * ..ex
 * aire-list(ordered items.bind="['Item 1', 'Item 2', 'Item 3']" striped)
 *
 * @section {Style Modifiers}
 *
 * Add one or more of the following attributes to aire-list to change its appearance.
 *
 * ..attr
 * {bullet} Add this attribute to add bullets to the list.
 *
 * ..attr
 * {divider} Add this attribute to add a line between each list item
 *
 * ..attr
 * {striped} Add this attribute to give odd-numbered list items a different background color
 *
 * ..attr
 * {large} Add this attribute to increase the padding of list items
 *
 */


@inject(Element)
@customElement('aire-list')
export class AireList {

    @bindable
    ordered : boolean = false;

    @bindable
    items : string[];

    public static modifiers : string[] = [
        'bullet',
        'divider',
        'striped',
        'large'
    ];

    constructor(private el : Element) {

    }

    bind() {
        let el = this.el;


        let nodes = el.childNodes,
            ul = nodes.item(0),
            ol = nodes.item(1),
            list = null;

        if (this.ordered) {
            let lis = ul.childNodes;
            list = ol;
            lis.forEach(li => list.appendChild(li));
            ul.remove();
        } else {
            ol.remove();
            list = ul;
        }

        dom.extractModifiers(AireList.modifiers, 'uk-list', el, list, false)
    }



}