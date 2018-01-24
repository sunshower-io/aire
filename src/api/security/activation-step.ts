import {NavigationInstruction, Next, PipelineStep, RedirectToRoute} from "aurelia-router";
import {SecurityService} from "aire/api/security";
import {LogManager} from "aurelia-framework";

let log = LogManager.getLogger('aire:ActivationStep');


export class ActivationStep implements PipelineStep {


    constructor(private service: SecurityService,
                private activationLocation: string) {
    }

    async run(instruction: NavigationInstruction, next: Next): Promise<any> {
        let active = await this.service.isActive(),
            routingToActivate = instruction.getAllInstructions().some(i => i.config.name == this.activationLocation);
        if (active) {
            if (routingToActivate) {
                log.debug("routing to active");
                return next.cancel(new RedirectToRoute("login"));
            } else {
                log.debug("active and not routing to disabled activation route");
                return next();
            }
        }
        log.debug("sunshower is not active");
        if(routingToActivate) {
            log.debug("routing to active");
            return next();
        }
        log.debug("redirecting to active");
        return next.cancel(new RedirectToRoute("activate"));
    }

}