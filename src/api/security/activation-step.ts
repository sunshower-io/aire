import {NavigationInstruction, Next, PipelineStep, RedirectToRoute} from "aurelia-router";
import {SecurityService} from "aire/api/security";

export class ActivationStep implements PipelineStep {


    constructor(private service: SecurityService,
                private activationLocation: string) {
    }

    async run(instruction: NavigationInstruction, next: Next): Promise<any> {
        let active = await this.service.isActive(),
            routingToActivate = instruction.getAllInstructions().some(i => i.config.name == this.activationLocation);
        if (active) {
            if (routingToActivate) {
                return next.cancel(new RedirectToRoute("login"));
            } else {
                return next();
            }
        }
        if(routingToActivate) {
            return next();
        }
        return next.cancel(new RedirectToRoute("activate"));
    }

}