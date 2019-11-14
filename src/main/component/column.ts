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
     * <p class="uk-text-lead">This component allows for easy table generation</p>
     *
     * @description
     * Custom element for defining a column within a table
     *
     * @section {Usage}
     *
     * The `aire-column` is used within a table and has optional children `aire-table-header`, `aire-table-cell` and `aire-table footer`.
     *
     * ..ex
     * aire-table(striped hover caption="A Sample Table")
     *      aire-column(shrink)
     *          aire-table-header(content="Narrow")
     *          aire-table-cell(content="1")
     *          aire-table-cell(content="2")
     *          aire-table-cell(content="3")
     *          aire-table-footer(content="Foot")
     *     aire-column(expand)
     *          aire-table-header(content="This column is wider")
     *          aire-table-cell(content="1")
     *          aire-table-cell(content="2")
     *          aire-table-cell(content="3")
     *          aire-table-footer(content="Foot")
     *
     *
     * @section {Style Modifiers}
     * Add `shrink` or `expand` to change the default column widths.
     *
     * ..attr
     * {shrink} Add this attribute to reduce the column widths to fit its content
     *
     * ..attr
     * {expand} Add this attribute to expand the column widths to fill the remaining space
     *
     */

    /**
     * The widths of the column -- only the first will be applied
     */
    public static widths : string[] = [
        'shrink',
        'expand'
    ]; //TODO allow widths setting with .uk-widths-*

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

        dom.extractModifiers(AireColumn.widths, 'uk-table', this.el, cell, true);
    }

}