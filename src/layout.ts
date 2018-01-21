import {autoinject, Container, customAttribute} from "aurelia-framework";

import 'golden-layout';

@autoinject
@customAttribute('layout')
export class Layout {

    private layout: GoldenLayout;

    constructor(private element: Element,
                private injectionContext: Container) {
        var config = {
            content: [{
                type: 'row',
                content: [
                    {
                        type: 'component',
                        componentName: 'example',
                        componentState: {text: 'Component 1'}
                    },
                    {
                        type: 'component',
                        componentName: 'example',
                        componentState: {text: 'Component 2'}
                    }
                ]
            }]
        };
        let layout = new GoldenLayout(config, element);
        injectionContext.registerInstance(GoldenLayout, layout);
        this.layout = layout;
    }

    attached(): void {
        setTimeout(() => {
            this.layout.init();
        });
    }


}