import 'golden-layout';
import {autoinject, processContent, customElement, TemplatingEngine} from "aurelia-framework";

@autoinject
@customElement('row')
export class Row {

    frapper: string = "coolbeans";
    private element: Element;

    constructor(private layout: GoldenLayout, templatingEngine:TemplatingEngine) {
        
    }
    
    onClick() {
        this.frapper = "fuck";
    }
    

    attached(): void {
        this.layout.registerComponent('example', (container, state) => {
            $(this.element).appendTo(container.getElement());
        });
    }

}