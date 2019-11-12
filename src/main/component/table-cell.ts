import {
    bindable,
    noView,
    customElement
} from 'aurelia-framework';

@noView()
@customElement('aire-table-cell')
export class AireTableCell {

    @bindable
    content : string;

}