import {BooleanValue} from "aire/lib/types";
import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class SecurityService {
    
    constructor(private client:HttpClient) {
        
    }
    
    
    
    async isActive() : Promise<boolean> {
        let bresult = await this.client.fetch('activation'),
            jsvalue = bresult.json(),
            el = new BooleanValue(jsvalue);
        return el.value
    }
}