export class Step {
    title : string;
    optional : boolean;
    number : number;
    editable : boolean;

    isActive(activeStep : number) : boolean {
        return this.number === activeStep;
    }

    isDone(activeStep : number) : boolean {
        return this.number < activeStep;
    }

    isNavigable(activeStep : number, activeStepOptional : boolean) : boolean {
        return (this.editable && this.isDone(activeStep)) || (activeStepOptional && this.number === activeStep + 1);
        //we can go there if it was previous and editable or if it's the next one and active one was optional
    }
}