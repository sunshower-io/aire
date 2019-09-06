import {
  inject,
  containerless,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";
import ViewportOptions = AireViewport.ViewportOptions;

@containerless
@inject(Element)
@customElement('aire-viewport')
export class AireViewport {

  main: HTMLDivElement;


  constructor(readonly el: Element) {

  }


  public setStyle(style: string) : boolean {
    return dom.setStyle(this.main, style);
  }

  public unsetStyle(style: string) : boolean {
    return dom.unsetStyle(this.main, style);
  }

  public includeRegion(region: AireViewport.Region) {
    this.setStyle(`w-${region}`);
  }

  public excludeRegion(region: AireViewport.Region) {
    this.unsetStyle(`w-${region}`);
  }
}

export module AireViewport {
  export type Region = 'header' | 'footer';
  export type Type = 'large' | 'small' | 'default';

  export interface ViewportOptions {
    size: Type;
    region: Region
  }
}


export abstract class ViewportComponent {


  protected readonly el : Element;
  protected readonly element: HTMLElement;

  protected constructor(
    protected readonly viewport:AireViewport,
    protected readonly options: ViewportOptions
  ) {


  }

  attached() : void {
    if(this.isViewportMember()) {
      let vp = this.viewport,
        opts = this.options,
        el = this.el,
        element = this.element;

      vp.includeRegion(opts.region);
      dom.decorateTo(el, vp.main, opts.size, `h-${opts.size}`);
      dom.decorateTo(el, element, opts.size, `h-${opts.size}`);
    }
  }

  detached() : void {
    if(this.isViewportMember()) {
      this.viewport.excludeRegion(this.options.region);
    }
  }

  protected isViewportMember() : boolean {
    let el = this.el,
      parent = el && el.parentElement,
      parentName = parent && parent.nodeName;
    return parentName === 'AU-CONTENT';

  }

}


