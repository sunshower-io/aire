import {
  containerless,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";

@containerless
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
}


export abstract class ViewportComponent {


  protected constructor(
    protected readonly viewport:AireViewport,
    readonly region: AireViewport.Region
  ) {

  }

  attached() : void {
    this.viewport.includeRegion(this.region);
  }

  detached() : void {
    this.viewport.excludeRegion(this.region);
  }

}


