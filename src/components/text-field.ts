import {MDCTextField} from '@material/textfield'

import {UUID} from "aire/lib/lang";
import {FieldType} from "aire/components/components";
import {bindable, bindingMode, customElement} from "aurelia-framework";

@customElement("text-field")
export class TextField {


    private element: HTMLElement;

    @bindable public id: string;
    @bindable public label: string;
    @bindable public icon: string = '';
    @bindable public disabled: boolean;
    @bindable public required: boolean;
    @bindable public dense: boolean;
    @bindable public asUnderline: boolean; //todo hook in this option
    
    @bindable({
        defaultBindingMode: bindingMode.twoWay
    })
    public value: string;

    @bindable public type: FieldType = "text";

    private field: MDCTextField;

    attached(): void {
        this.field = new MDCTextField(this.element);
        if (this.value != null) {
            let originalWidth = this.field.label_.foundation_.getWidth();
            this.field.outline_.foundation_.updateSvgPath(
                originalWidth*.75,
                false); //currently prefilled + outline is broken, this kinda gets around it
        }
    }


    getId(): string {
        if (this.id) {
            return this.id;
        }
        this.id = UUID.random();
        return this.id;
    }

}