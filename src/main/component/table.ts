
import {
    inject,
    bindable,
    children,
    containerless,
    customElement
} from 'aurelia-framework';
import {dom} from "aire/core/dom";
import {AireColumn} from "aire/component/column";

/**
 *
 * <p class="uk-text-lead">This component allows for easy table generation</p>
 *
 * @description
 * Custom element for laying out a table.
 *
 * @section {Usage}
 *
 * The `aire-table` is a table with an optional caption, header and footer. Row data is provided as an array of arrays.
 *
 * ..ex
 * aire-table(source.bind="[['row 1 col 1', 'row 1 col 2'], ['row 2 col 1', 'row 2 col 2'], ['row 3 col 1', 'row 3 col 2']]" columns.bind="['col 1', 'col 2']" striped hover footer caption="A Sample Table")
 *
 * @section {Style and Size Modifiers}
 *
 * Add one or more of `divider`, `striped`, `hover`, `justify`, `middle` and `responsive` to aire-table to change its appearance and behavior. Add `small` or `large` to change the default row padding.
 *
 * ..attr
 * {divider} Add this attribute to add a line between each row
 *
 * ..attr
 * {striped} Add this attribute to give odd-numbered rows a different background color
 *
 * ..attr
 * {hover} Add this attribute to give rows a different appearance when hovered over
 *
 * ..attr
 * {justify} Add this attribute to remove the padding of the first and last column
 *
 * ..attr
 * {middle} Add this to vertically align all cell contents to the middle
 *
 * ..attr
 * {responsive} Add this attribute if you want the table to stack on small screens
 *
 * ..attr
 * {small} Add this attribute to decrease the size of table rows
 *
 * ..attr
 * {large} Add this attribute to increase the size of table rows
 *
 */

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