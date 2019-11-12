import {
    bindable,
    children,
    customElement
} from 'aurelia-framework';
import {AireTableHeader} from "aire/component/table-header";
import {AireTableCell} from "aire/component/table-cell";
import {dom} from "aire/core/dom";

@customElement('aire-column')
export class AireColumn {

    /**
     * The width of the column -- only the first will be applied
     */
    public static width : string[] = [
        'shrink',
        'expand'
    ]; //TODO allow width setting with .uk-width-*

    /**
     * The appearance of the column text -- multiple can be applied
     */
    public static modifiers : string[] = [
        'link',
        'middle'
    ];

    /**
     * The treatment of the column text -- multiple can be applied
     */
    public static textModifiers : string[] = [
        'truncate',
        'nowrap',
    ];

    @children('aire-table-header')
    headers : AireTableHeader[];

    @children('aire-table-cell')
    cells : AireTableCell[];

    @children('aire-table-footer')
    footers : AireTableCell[];

    /** Name of the column -- used as Header text if no text is provided **/
    @bindable
    name : string;

    constructor(private el : Element) {

    }

    decorateCell(cell : Element) {
        let el = this.el;

        dom.extractModifiers(AireColumn.width, 'uk-table', el, cell, true);
        dom.extractModifiers(AireColumn.modifiers, 'uk-table', el, cell);
        dom.extractModifiers(AireColumn.textModifiers, 'uk-text', el, cell);
    }

}