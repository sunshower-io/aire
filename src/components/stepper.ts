import {bindable, customElement} from "aurelia-framework";
import {Step} from "aire/components/step";

@customElement("stepper")
export class Stepper {
    @bindable
    steps : Step[];

    @bindable
    activeStep : number = 1;

}