import {bindable, customElement} from "aurelia-framework";

// @containerless
@customElement("fab")
export class Fab {

    @bindable
    private action : string;
    @bindable
    private link : string;

}