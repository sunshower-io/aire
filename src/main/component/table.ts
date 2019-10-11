
import {
    inject,
    bindable,
    children,
    containerless,
    customElement
} from 'aurelia-framework';
import {dom} from "aire/core/dom";
import {AireColumn} from "aire/component/column";

@inject(Element)
@containerless
@customElement('aire-table')
export class AireTable {

    /**
     * The style of the table -- multiple can be applied
     */
    public static modifiers : string[] = [
        'divider',
        'striped',
        'hover',
        'justify',
        'middle',
        'responsive'
    ];

    /** The size of the rows -- only the first will be applied **/
    public static sizes : string[] = [
        'small',
        'large'
    ];

    // @children('aire-column')
    @bindable
    columns: string[];

    /** If the table has a footer; default false */
    @bindable
    footer : boolean = false;

    /** If the table has a header; default true */
    @bindable
    header : boolean = true;

    /** Text for table caption; if null, no caption rendered */
    @bindable
    caption : string;

    @bindable
    source : [][];

    table : HTMLTableElement;

    constructor(private el : Element) {

    }

    bind() {
        let el = this.el,
            table = this.table;

        dom.extractModifiers(AireTable.modifiers, 'uk-table', el, table, false);
        dom.extractModifiers(AireTable.sizes, 'uk-table', el, table, true);
    }
}