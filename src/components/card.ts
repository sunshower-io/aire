import {
    bindable,
    containerless,
    autoinject,
    customElement
} from "aurelia-framework";
import {Image} from "aire/components/image";
import {createEvent} from "aire/dom";

@containerless
@autoinject()
@customElement("card")
export class Card {

    @bindable private value     : any;
    @bindable private name      : string;
    @bindable private links     : {icon: string, action: string}[];
    @bindable private link      : string;
    @bindable private image     : Image;

    private src : string;

    constructor(private el: Element) {

    }


    clicked() : void {
        let e = createEvent('clicked', this.value);
        this.el.dispatchEvent(e);
    }

    attached() {
        let img = this.image as any;
        if(img) {
            this.src = `data:image/svg+xml;base64, ${img.image}`;
        }
    }




}