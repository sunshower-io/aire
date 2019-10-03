import {bindable, children, customElement} from 'aurelia-framework';
import * as UIKit                          from "uikit";
import {TabPanel}                          from "uikit";
import {AireTab}                           from "aire/component/tab";
import {Router}                            from "aurelia-router";
import {dom}                               from "aire/core/dom";
import * as PerfectScrollbar                    from "perfect-scrollbar";


@customElement('aire-tab-panel')
export class AireTabPanel {

  /**
   * properties
   */

  @bindable router : Router;

  /**
   *
   * Aurelia
   */
  @children('aire-tab')
  private tabs : AireTab[];


  /**
   * fields
   */


  /**
   * Actual tab panel
   */
  private panel : TabPanel;


  private contents: HTMLDivElement;

  private scrollbar: any;

  /**
   * List where we put tabs
   */
  private header : HTMLUListElement;

  public type : Type;

  constructor(readonly el : Element) {
    this.type = el.hasAttribute('switcher') ? Type.Switcher : Type.Tabs;
    dom.decorate(this.el, 'bottom');
  }

  attached() : void {

    this.doDecorate();


    let router = this.router;
    if (!router) {
      this.generateTabs();
    }
    this.initialize();

    this.updateScrolling();
  }

  private updateScrolling() {
    if(!this.scrollbar) {
      let sb = PerfectScrollbar as any;
      this.scrollbar = new sb(this.contents);
    }
    this.scrollbar.update();
  }

  private initialize() : TabPanel {
    switch (this.type) {
      case Type.Switcher:
        this.panel = UIKit.switcher(this.header);
        this.header.classList.add('uk-subnav', 'uk-subnav-pill');
        break;
      case Type.Tabs:
        this.panel = UIKit.tab(this.header);
    }
    return this.panel;
  }

  public get activeIndex() : number {

    let router = this.router,
      nav = router.navigation;
    for (let i = 0; i < nav.length; i++) {
      if (nav[i].isActive) {
        return i;
      }
    }
    return -1;
  }


  navigate(idx : number) : void {
    let
      router = this.router,
      destination = router.navigation[idx],
      cfg = destination.config;
    router.navigateToRoute(cfg.name);
    this.panel.show(idx);
  }


  private doDecorate() : void {
    dom.decorateTo(this.el, this.header, 'bottom', 'uk-tab-bottom');
  }

  private generateTabs() : void {
    let tabs = this.tabs;
    if (tabs) {
      for (let tab of tabs) {
        let theader = document.createElement('li'),
          href = document.createElement('a');
        href.innerHTML = tab.title;
        theader.appendChild(href);
        this.header.appendChild(theader);
      }
    }

  }


}

export enum Type {
  Switcher,
  Tabs
}