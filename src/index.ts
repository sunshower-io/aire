import {FrameworkConfiguration} from 'aurelia-framework';
import {Events} from "aire/components/events";
import {EventAggregator} from "aurelia-event-aggregator";
import {
    SecurityService, 
    AuthenticationManager
} from "aire/api/security";

export function configure(config: FrameworkConfiguration) {
    let aurelia = config.aurelia,
        container = aurelia.container;
    
    config.postTask(t => {
        let service = container.get(SecurityService),
            authManager = new AuthenticationManager(service);
        container.registerInstance(AuthenticationManager, authManager);
        Events.setEventAggregator(container.get(EventAggregator));
    });
    
    
    
    config.globalResources([
        './layout', 
        './layout/component', 
        './layout/row',
        './layout/stack',
        './base/header',
        './components/text-field',
        './components/toolbar',
        './components/card',
        './components/drawer',
        './components/tab-panel',
        './components/grid-list',
        './components/checkbox',
        './components/fab',
        './components/stepper',
        './components/progress-bar',
        './components/linear-progress'
    ]);
}
