import {BooleanValue} from "aire/lib/types";
import {autoinject, LogManager} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import {Activation, Authentication, Token, User} from "aire/api/security";

var log = LogManager.getLogger("aire:security-service");

@autoinject
export class SecurityService {

    constructor(private client: HttpClient) {

    }
    
    
    async logout(t:Token)  : Promise<boolean> {
        log.debug('logging out...');
        t.value = "$$logout$$" + t;
        try {
            await this.client.fetch('security/token/authenticate', {
                method: 'put',
                body: JSON.stringify(t)
            });
            log.debug("successfully terminated session");
            return true;
        }
        catch(e) {
            log.debug("encountered error while attempting to logout: ", e);
            return false;
        }
    }
    
    
    async authenticateByToken(token: Token) : Promise<Authentication> {
        log.debug("attempting to authenticate by token: ", token.value);
        
        try {
            let resp = await this.client.fetch('security/token/authenticate', {
                method: 'put',
                body: JSON.stringify(token)
            }),
                jsonv = await resp.json(),
                auth = new Authentication(jsonv);
            log.debug("successfully authenticated by token");
            return auth;
        } catch(e) {
            log.debug("failed to validate token: reason", e);
            throw e;
        }
    }
    
    
    async validate(token: Token) : Promise<boolean> {
        log.debug("attempting to validate token: ", token.value);
        try {
            await this.client.fetch('security/validate', {
                method: 'put',
                body: JSON.stringify(token)
            });
            log.debug("token successfully validated");
            return true;
        } catch(er) {
            log.debug("Sunshower rejected token.  Reason: ", er);
            return false;
        }
    }

    async login(user: User): Promise<Authentication> {
        let validation = await this.client.fetch('security/authenticate', {
                method: 'put',
                body: JSON.stringify(user.toJson())
            }),
            jsonvalue = await validation.json();
        return new Authentication(jsonvalue);
    }

    async activate(user: User): Promise<Activation> {
        log.debug("Activating...");
        let activate = await this.client.fetch('activation/activate', {
                method: 'post',
                body: JSON.stringify(user.toJson())
            }),
            jsvalue = await activate.json(),
            activation = new Activation(jsvalue);
        log.debug("Successfully activated sunshower");
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