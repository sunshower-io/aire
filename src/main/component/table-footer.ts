import {
    bindable,
    noView,
    customElement
} from 'aurelia-framework';

@noView()
@customElement('aire-table-footer')
export class AireTableFooter {

    @bindable
    content : string;

}