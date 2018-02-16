import {bindable, customElement, inject} from "aurelia-framework";
import {Step} from "aire/components/step";
import { EventAggregator } from 'aurelia-event-aggregator';

@customElement("stepper")
@inject(EventAggregator)
export class Stepper {
    @bindable
    steps : Step[];

    @bindable
    activeStep : number;

    @bindable
    eventListener : string;

    constructor(private eventAggregator : EventAggregator) {

    }

    changeStep(step : Step) {
        if (step.isNavigable(this.activeStep, this.steps[this.activeStep -1].optional)) {
            this.activeStep = step.number;
            this.eventAggregator.publish('STEPPER_NAVIGATION', {step: this.activeStep});
        } else {
            //TODO figure out good non-navigable UX
        }
    }

}