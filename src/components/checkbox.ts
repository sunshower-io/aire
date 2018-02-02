import {
    bindable, 
    customElement
} from "aurelia-framework";
import {generated} from "aire/dom/dom";

@customElement('checkbox')
export class Checkbox {
    
    @generated
    private id: string;

    @bindable
    private label: string;
    
}