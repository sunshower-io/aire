
import {
    inject,
    bindable,
    children,
    customElement
} from 'aurelia-framework';
import {dom} from "aire/core/dom";
import {AireColumn} from "aire/component/column";

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
                        newCell = row.insertCell();

                    if (!decorated) {
                        column.decorateCell(newCell);
                        decorated = true;
                    }

                    newCell.innerHTML = column.cells[cIndex].content;
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