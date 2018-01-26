import {customElement} from "aurelia-framework";
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';

@customElement("drawer")
export class Drawer {

    private element: Element;
    private drawer: MDCTemporaryDrawer;

    attached(): void {
        this.drawer = new MDCTemporaryDrawer(this.element);
        this.drawer.open = true;
    }
}