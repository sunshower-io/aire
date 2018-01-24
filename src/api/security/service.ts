import {HttpClient} from "aurelia-fetch-client";
import {BooleanValue} from "aire/lib/types";

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