import {NavigationInstruction, Next, PipelineStep, RedirectToRoute} from "aurelia-router";
import {SecurityService} from "aire/api/security";

export class ActivationStep implements PipelineStep {


    constructor(private service: SecurityService,
                private activationLocation: string) {
    }

    async run(instruction: NavigationInstruction, next: Next): Promise<any> {
        let active = this.service.isActive();
        
        if(active) {
            return next();
        } else {
            return next.complete(new RedirectToRoute(this.activationLocation));
        }
    }

}