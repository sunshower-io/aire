
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

    @children('aire-column')
    private columns: AireColumn[];

    @bindable
    hasFooter : boolean;

    @bindable
    source : any;

    table : HTMLTableElement;

    constructor(private el : Element) {

    }

    bind() {
        this.extractModifiers(AireTable.modifiers);
        this.extractModifiers(AireTable.sizes, true);
    }

    private extractModifiers(modifiers : string[], blocking ?: boolean) {
        for (let modifier of modifiers) {
            if (dom.decorateTo(
                this.el,
                this.table,
                modifier,
                `uk-table-${modifier}`
            ) && blocking) {
                return true;
            }
        }
        return false;
    }
}