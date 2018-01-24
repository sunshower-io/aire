import {MDCTextField} from '@material/textfield'
import {bindable, customElement} from "aurelia-framework";

import {FieldType} from "aire/components/components";
import {UUID} from "aire/lib/lang";

@customElement("text-field")
export class TextField {


    private element: Element;


    @bindable public label: string;
    @bindable public id: string;
    @bindable public value: string;

    @bindable public type: FieldType = "text";

    private field: MDCTextField;

    attached(): void {
        this.field = new MDCTextField(this.element);
    }

    public getValue(): string {
        return this.field.getValue();
    }

    public setValue(value: string) {
        this.field.setValue(value);
    }


    getId(): string {
        if (this.id) {
            return this.id;
        }
        this.id = UUID.random();
        return this.id;
    }

}