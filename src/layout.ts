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
        this.layout = new GoldenLayout({}, element);
        this.configuration = this.layout.config;
        injectionContext.registerInstance(GoldenLayout, this.layout);
    }

    attached(): void {
        var config = {
            dimensions: {
                minItemHeight: 50
            },
            
            content: [{
                type: 'row',
                content: [
                    {
                        type: 'component',
                        componentName: 'main',
                        width: 90,
                        componentState: {text: 'Component 1'}
                    },
                    {
                        type: 'component',
                        componentName: 'right',
                        width:10,
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