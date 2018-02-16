import {bindable, customElement} from "aurelia-framework";
import {Step} from "aire/components/step";

@customElement("stepper")
export class Stepper {
    @bindable
    steps : Step[];

    @bindable
    activeStep : number;

    @bindable
    eventListener : string;

    changeStep(step : Step) {
        this.activeStep = step.number;
        //TODO set up events to change activeStep in parent
    }

}