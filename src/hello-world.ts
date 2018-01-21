import 'golden-layout';


export class HelloWorld {
    
    container: HTMLElement;


    constructor() {

    }

    attached() {

        let l = new GoldenLayout({
            content: [{
                type: 'row',
                content: [{
                    type: 'component',
                    componentName: 'testComponent',
                    componentState: {title: 'First Item'}
                }, {
                    type: 'component',
                    componentName: 'testComponent',
                    componentState: {title: 'Second Item'}
                }]
            }]
        }, this.container);

        l.registerComponent('testComponent', function (container, componentState) {
            container.getElement().html('<h2>' + componentState.label + '</h2>');
        });
        
        l.init();

    }

}
