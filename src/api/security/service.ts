import {BooleanValue} from "aire/lib/types";
import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import {Activation, User, Authentication} from "aire/api/security";

@autoinject
export class SecurityService {

    constructor(private client: HttpClient) {

    }

    async login(user:User)  : Promise<Authentication> {
        let validation = await this.client.fetch('security/authenticate', {
            method: 'post',
            body: JSON.stringify(user.toJson())
        }),
        jsonvalue = await validation;
        return new Authentication(jsonvalue);
    }

    async activate(user: User): Promise<Activation> {
        let activate = await this.client.fetch('activation/activate', {
                method: 'post',
                body: JSON.stringify(user.toJson())
            }),
            jsvalue = activate.json();
        return new Activation(jsvalue);
    }


    async isActive(): Promise<boolean> {
        let bresult = await this.client.fetch('activation'),
            jsvalue = await bresult.json(),
            el = new BooleanValue(jsvalue);
        return el.value
    }
}