import {bindable, customElement} from "aurelia-framework";
import {Image} from "aire/components/image";

@customElement("card")
export class Card {

    @bindable private title : string;
    @bindable private links : {icon: string, action: string}[];
    @bindable private link : string;
    @bindable private image : Image;


    attached() {
    }

}