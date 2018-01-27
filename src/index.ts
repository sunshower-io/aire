import {FrameworkConfiguration} from 'aurelia-framework';
import {Events} from "aire/components/events";
import {EventAggregator} from "aurelia-event-aggregator";

export function configure(config: FrameworkConfiguration) {
    let aurelia = config.aurelia,
        container = aurelia.container;
    
    config.postTask(t => {
        Events.setEventAggregator(container.get(EventAggregator));
    });
    
    config.globalResources([
        './layout', 
        './layout/component', 
        './layout/row',
        './base/header',
        './components/text-field',
        './components/toolbar',
        './components/card',
        './components/drawer'
    ]);
}
