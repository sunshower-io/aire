import {autoinject, Container, customAttribute} from "aurelia-framework";

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
            content: [{
                type: 'row',
                content: [
                    {
                        type: 'component',
                        componentName: 'test1',
                        componentState: {text: 'Component 1'}
                    },
                    {
                        type: 'component',
                        componentName: 'test1',
                        componentState: {text: 'Component 2'}
                    },
                    {
                        type: 'component',
                        componentName: 'test2',
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