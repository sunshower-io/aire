import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LogManager} from "aurelia-framework";

export module Events {
    const log = LogManager.getLogger('aire:events');
    
    export var eventAggregator: EventAggregator;

    export function setEventAggregator(e:EventAggregator) : void {
        log.debug("Initializing event subsystem with: ", e);
        eventAggregator = e;
    }
   
    export type Action<T> = (T) => void;

    export class Drawer {
        
        static readonly TOGGLED = "events:drawer:toggled";

        constructor(public readonly opened: boolean) {
        }
        
        
        static on(topic: string, cb: Action<Drawer>) : Subscription {
            return eventAggregator.subscribe(topic, cb);
        }
            

        public static toggled(opened: boolean) {
            eventAggregator.publish(Drawer.TOGGLED, new Drawer(opened));
        }
    }
}