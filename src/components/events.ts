import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LogManager} from "aurelia-framework";

import {Drawer as VMDrawer} from 'aire/components/drawer';

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
        static readonly OPENED = "events:drawer:opened";
        static readonly CLOSED = "events:drawer:closed";
     
        

        constructor(public readonly drawer: VMDrawer) {
            
        }
        
        public publish(evt: string, drawer: VMDrawer) {
            eventAggregator.publish(evt, new Drawer(drawer));
        }
        
        static on(topic: string, cb: Action<Drawer>) : Subscription {
            return eventAggregator.subscribe(topic, cb);
        }
            
    }
}