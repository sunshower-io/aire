import {
    customElement
} from "aurelia-framework";

import {MDCTabBarScroller} from '@material/tabs'

@customElement('tab-panel')
export class TabPanel {
   
    private element:Element;
    private tabPanel: MDCTabBarScroller;
    
    attached() : void {
        this.tabPanel = new MDCTabBarScroller(this.element);
    }
    
}