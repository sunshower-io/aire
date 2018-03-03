import {bindable, customElement} from "aurelia-framework";
import {Image} from "aire/components/image";

@customElement("card")
export class Card {

    @bindable private name : string;
    @bindable private links : {icon: string, action: string}[];
    @bindable private link : string;
    @bindable private image : Image;

    private src : string;

    attached() {
        let img = this.image as any;
        this.src = `data:image/svg+xml;base64, ${img.image}`;
        console.log("SOURCE", this.src);
    }

}