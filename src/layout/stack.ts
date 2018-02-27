import 'golden-layout';
import {TemplatingEngine} from "aurelia-templating";
import {autoinject, customElement} from "aurelia-framework";

@autoinject
@customElement('stack')
export class Stack {

    private tags: Element;

    private properties: Element;


    constructor(private layout: GoldenLayout, templatingEngine: TemplatingEngine) {

        this.layout.registerComponent('tags', (container, state) => {
            $(this.tags).appendTo(container.getElement());
        });


        this.layout.registerComponent('properties', (container, state) => {
            $(this.properties).appendTo(container.getElement());
        });
    }


}