

import {
    bindable, 
    customElement
} from "aurelia-framework";
import {createEvent, generated} from "aire/dom/dom";

@customElement('checkbox')
export class Checkbox {
    
    @generated
    private id: string;
    

    @bindable
    private label: string;
 
    @bindable
    private value: boolean;

    private element:Element;
    
    valueChanged(oldValue, newValue) : void {
        this.element.dispatchEvent(createEvent('value-changed', {
            value: newValue 
        }));
    }
    
    
}