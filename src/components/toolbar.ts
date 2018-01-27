import {containerless, customElement} from "aurelia-framework";
import {Events} from "aire/components/events";

@containerless
@customElement("toolbar")
export class Toolbar {
    

    private hasMenu : boolean = true;
    
    constructor() {
        
        
    }
    
    onMenuClick() {
        Events.Drawer.toggled(true);
    }


}