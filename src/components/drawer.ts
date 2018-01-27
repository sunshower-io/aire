import {customElement} from "aurelia-framework";
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';

import {Events} from "aire/components/events";
import DrawerEvent = Events.Drawer;

@customElement("drawer")
export class Drawer {

    private expanded: boolean;
    private element: Element;
    private contents: Element;
    private header: Element;
    private minifiedElement: Element;
    private drawer: MDCTemporaryDrawer;

    constructor() {
        DrawerEvent.on(DrawerEvent.TOGGLED, this.toggle);
    }

    activate(): void {
    }


    attached(): void {
        let drawer = new MDCTemporaryDrawer(this.element);
        this.drawer = drawer;
        drawer.listen('MDCTemporaryDrawer:close', () => {
            this.close();
        });
    }

    private open(): void {
        this.expanded = true;
        this.contents.appendChild(
            this.minifiedElement.querySelector('.mdc-list')
        );
        this.drawer.open = this.expanded;
    }

    private close(): void {
        this.expanded = false;
        this.minifiedElement.appendChild(this.contents.querySelector('.mdc-list'));
    }


    public toggle: () => void = () => {
        this.open();
    }
}