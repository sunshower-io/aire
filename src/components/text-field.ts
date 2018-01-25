import {MDCTextField} from '@material/textfield'

import {UUID} from "aire/lib/lang";
import {FieldType} from "aire/components/components";
import {bindable, bindingMode, customElement} from "aurelia-framework";

@customElement("text-field")
export class TextField {


    private element: Element;

    @bindable public id: string;
    @bindable public label: string;
    @bindable public icon: string = '';
    
    @bindable({
        defaultBindingMode: bindingMode.twoWay
    })
    public value: string;

    @bindable public type: FieldType = "text";

    private field: MDCTextField;

    attached(): void {
        this.field = new MDCTextField(this.element);
    }


    getId(): string {
        if (this.id) {
            return this.id;
        }
        this.id = UUID.random();
        return this.id;
    }

}