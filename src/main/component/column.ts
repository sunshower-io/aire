import {
    bindable,
    customElement,
    containerless
} from 'aurelia-framework';
import {dom} from "aire/core/dom";

@containerless
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
     * The style of the column text -- multiple can be applied
     */
    public static modifiers : string[] = [
        'link',
        'truncate',
        'nowrap',
        'middle'
    ];

    /** Header text */
    @bindable
    text : string;

    header : HTMLTableHeaderCellElement;

    constructor(private el : Element) {

    }

    bind() {
        this.extractModifiers(AireColumn.width, true);
        this.extractModifiers(AireColumn.modifiers)
    }

    private extractModifiers(modifiers : string[], blocking ?: boolean) {
        for (let modifier of modifiers) {
            let prefix = modifier === 'truncate' || modifier === 'nowrap' ? 'text' : 'table';

            if (dom.decorateTo(
                this.el,
                this.header,
                modifier,
                `uk-${prefix}-${modifier}`
            ) && blocking) {
                return true;
            }
        }
        return false;
    }

}