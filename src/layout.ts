import {autoinject, Container, customAttribute} from "aurelia-framework";

import 'jquery';
import 'golden-layout';

@autoinject
@customAttribute('layout')
export class Layout {

    private configuration: any;
    private layout: GoldenLayout;
    

    constructor(private element: Element,
                private injectionContext: Container) {
        this.layout = new GoldenLayout(
            {dimensions: {
            minItemHeight: 50,
            headerHeight:48
            }
        }, element);
        this.configuration = this.layout.config;
        injectionContext.registerInstance(GoldenLayout, this.layout);
    }

    attached(): void {
        var config = {
            content: [{
                type: 'row',
                content: [
                    {
                        type: 'component',
                        componentName: 'main',
                        width: 80,
                        componentState: {text: 'Component 1'}
                    },
                    {
                        type: 'component',
                        componentName: 'right',
                        width:20,
                        componentState: {text: 'Component 2'}
                    }
                ]
            }]
        };
        this.configuration.content = config.content;
        setTimeout(() => {
            this.layout.init();
        });
    }


}