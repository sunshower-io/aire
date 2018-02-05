import {bindable, containerless, customElement} from "aurelia-framework";

@containerless
@customElement("card")
export class Card {

    @bindable private title : string;
    @bindable private subtitle : string;
    @bindable private text : string;
    @bindable private links : {text: string, action: string}[];
    @bindable private link : string;


    attached() {
        console.log(this);
    }
}