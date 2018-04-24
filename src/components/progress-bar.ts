import {
    containerless,
    customElement,
    bindable
} from "aurelia-framework";

@containerless
@customElement('progress-bar')
export class ProgressBar {


    @bindable
    public progress: number;
}
