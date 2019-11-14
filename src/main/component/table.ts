
import {
    inject,
    bindable,
    children,
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
 * The `aire-table` is a table with an optional caption. Table content is provided with the use of `aire-column` and ITS children, `aire-table-header`, `aire-table-cell` and `aire-table-footer`
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

    @children('aire-column')
    columns: AireColumn[] = [];

    /** Text for table caption; if null, no caption rendered */
    @bindable
    caption : string;

    table : HTMLTableElement;

    constructor(private el : Element) {

    }

    bind() {
        let el = this.el,
            table = this.table;

        dom.extractModifiers(AireTable.modifiers, 'uk-table', el, table, false);
        dom.extractModifiers(AireTable.sizes, 'uk-table', el, table, true);

        //trusting columns maintain insertion order
    }

    attached() {
        this.renderColumns();
    }

    columnsChanged() {
        this.renderColumns();
    }

    renderColumns() {
        let table = this.table,
            columns = this.columns,
            header = table.tHead,
            body = table.tBodies.length > 0 ? table.tBodies.item(0) : null,
            footer = table.tFoot;

        for (let i = 0; i < columns.length; i++) {
            let column = columns[i],
                headers = column.headers,
                cells = column.cells,
                footers = column.footers;

            let decorated = false;

            if (typeof headers !== 'undefined') {
                for (let hIndex = 0; hIndex < headers.length; hIndex++) {
                    if (i == 0) {
                        if (header == null) {
                            header = table.createTHead();
                        }
                        header.insertRow();
                    }

                    let row = header.rows[hIndex],
                        newCell = row.insertCell();

                    if (!decorated) {
                        column.decorateCell(newCell);
                        decorated = true;
                    }

                    newCell.innerHTML = column.headers[hIndex].content;
                }
            }

            if (typeof cells !== 'undefined') {
                for (let cIndex = 0; cIndex < cells.length; cIndex++) {
                    if (i == 0) {
                        if (body == null) {
                            body = table.createTBody();
                        }
                        body.insertRow();
                    }

                    let row = body.rows[cIndex],
                        newCell = row.insertCell(),
                        originalCell = column.cells[cIndex];

                    if (!decorated) {
                        column.decorateCell(newCell);
                        decorated = true;
                    }

                    originalCell.decorateCell(newCell);

                    if (originalCell.href == null) {
                        newCell.innerHTML = originalCell.content;
                    } else {
                        newCell.innerHTML = `<a href="${originalCell.href}" class="uk-link-reset">${originalCell.content}</a>`;
                    }
                }
            }

            if (typeof footers !== 'undefined') {
                for (let fIndex = 0; fIndex < footers.length; fIndex++) {
                    if (i == 0) {
                        if (footer == null) {
                            footer = table.createTFoot();
                        }
                        footer.insertRow();
                    }

                    let row = footer.rows[fIndex],
                        newCell = row.insertCell();

                    if (!decorated) {
                        column.decorateCell(newCell);
                        decorated = true;
                    }

                    newCell.innerHTML = column.footers[fIndex].content;
                }
            }
        }

    }
}