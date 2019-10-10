import {
    inject,
    bindable,
    customElement} from 'aurelia-framework';
import {dom} from "aire/core/dom";

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
        let nodes = this.el.childNodes,
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
        //TODO create aire-li with slots

        dom.extractModifiers(AireList.modifiers, 'uk-list', this.el, list, false)
    }



}