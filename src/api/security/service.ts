import {BooleanValue} from "aire/lib/types";
import {autoinject, LogManager} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import {Activation, Authentication, User} from "aire/api/security";

var log = LogManager.getLogger("aire:security-service");

@autoinject
export class SecurityService {

    constructor(private client: HttpClient) {

    }

    async login(user: User): Promise<Authentication> {
        let validation = await this.client.fetch('security/authenticate', {
                method: 'put',
                body: JSON.stringify(user.toJson())
            }),
            jsonvalue = await validation;
        return new Authentication(jsonvalue);
    }

    async activate(user: User): Promise<Activation> {
        log.debug("Activating...");
        let activate = await this.client.fetch('activation/activate', {
                method: 'post',
                body: JSON.stringify(user.toJson())
            }),
            jsvalue = activate.json(),
            activation = new Activation(jsvalue);
        // log.debug("Successfully activated sunshower");
        return activation;
    }


    async isActive(): Promise<boolean> {
        log.debug("Checking sunshower activation status...");
        let bresult = await this.client.fetch('activation'),
            jsvalue = await bresult.json(),
            el = new BooleanValue(jsvalue);
        log.debug("sunshower active: ", el.value);
        return el.value
    }
}