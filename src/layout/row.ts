import 'golden-layout';
import {autoinject, bindable, customElement, TemplatingEngine} from "aurelia-framework";

@autoinject
@customElement('row')
export class Row {

    private element: Element;

    @bindable
    private componentId: string;

    constructor(private layout: GoldenLayout, templatingEngine: TemplatingEngine) {

    }



    attached(): void {
        this.layout.registerComponent(this.componentId, (container, state) => {
            $(this.element).appendTo(container.getElement());
        });
    }

}