import {
    bindable,
    noView,
    customElement
} from 'aurelia-framework';
import {dom} from "aire/core/dom";

@noView()
@customElement('aire-table-cell')
export class AireTableCell {

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
     * aire-table()
     *      aire-column()
     *          aire-table-header(content="This is a header")
     *          aire-table-cell(truncate content="Lorem ipsum dolor amet deserunt helvetica iPhone man bun kinfolk qui leggings austin crucifix beard keytar. Health goth lorem PBR&B woke consectetur offal organic. Gastropub VHS helvetica hell of freegan tofu whatever. Labore pabst snackwave copper mug chicharrones irure. Semiotics migas glossier aliquip selvage lo-fi. Single-origin coffee occaecat sustainable, est deserunt lo-fi artisan normcore do irony. Freegan ex bushwick flannel in semiotics street art cliche viral single-origin coffee dolore ullamco.")
     *          aire-table-cell(nowrap middle content="Lorem ipsum dolor amet deserunt helvetica)
     *          aire-table-cell(link href="https://sunshower.io" content="Made by Sunshower.io")
     *          aire-table-footer(content="This is a footer")
     *
     *
     * @section {Style Modifiers}
     * Add `shrink` or `expand` to change the default column widths.
     *
     * ..attr
     * {link} Add this attribute to link an entire cell
     *
     * ..attr
     * {middle} Add this attribute to vertically align the cell content to the middle
     *
     * ..attr
     * {truncate} Add this attribute to truncate long cell text
     *
     * ..attr
     * {nowrap} Add this attribute to keep text from wrapping
     *
     */

    @bindable
    content : string;

    //TODO make click.triggerable
    @bindable
    href : string = null;

    /**
     * The appearance of the column text -- multiple can be applied
     */
    public static modifiers : string[] = [
        'link',
        'middle'
    ];

    public static textModifiers : string[] = [
        'truncate',
        'nowrap',
    ];

    constructor(private el : Element) {

    }

    decorateCell(cell : Element) {
        dom.extractModifiers(AireTableCell.modifiers, 'uk-table', this.el, cell);
        dom.extractModifiers(AireTableCell.textModifiers, 'uk-text', this.el, cell);
    }

}