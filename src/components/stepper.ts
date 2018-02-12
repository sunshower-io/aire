import {bindable, customElement} from "aurelia-framework";

@customElement("stepper")
export class Stepper {
    @bindable
    steps : Step[];

    constructor() {

    }

}


export class Step {
    title : string;
    optional : boolean;
    number : number;
    active : boolean;
    editable : boolean;
    done : boolean;
}