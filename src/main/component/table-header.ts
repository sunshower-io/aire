import {
    bindable,
    noView,
    customElement
} from 'aurelia-framework';

@noView()
@customElement('aire-table-header')
export class AireTableHeader {

    @bindable
    content : string;

}