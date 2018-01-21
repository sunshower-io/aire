import 'golden-layout';
import {autoinject, bindable, customElement, TemplatingEngine} from "aurelia-framework";

@autoinject
@customElement('row')
export class Row {

    frapper: string = "coolbeans";
    private element: Element;

    @bindable
    private componentId: string;

    constructor(private layout: GoldenLayout, templatingEngine: TemplatingEngine) {

    }

    onClick() {
        this.frapper = "fuck";
    }


    attached(): void {
        this.layout.registerComponent(this.componentId, (container, state) => {
            $(this.element).appendTo(container.getElement());
        });
    }

}