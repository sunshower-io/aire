import {bindable, containerless, customElement} from "aurelia-framework";

@containerless
@customElement("card")
export class Card {

    @bindable private title : string;
    @bindable private subtitle : string;
    @bindable private text : string;
    @bindable private action1 : {text: string, action: any};
    @bindable private action2 : {text: string, action: any};

    //todo bind actions

}