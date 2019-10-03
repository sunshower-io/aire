declare module "uikit" {


  export interface GridOptions {}

  export function grid(el: Element, opts?: GridOptions);

  export class Showable {
    show() : void;
  }

  export interface Hideable {
    hide(): void;
  }

  export interface Component extends Showable, Hideable {

  }


  export interface DropOptions {

  }
  export function drop(el: HTMLElement, options?: DropOptions) : Component;


  export interface SwitcherOptions {

  }

  export function switcher(el : HTMLElement, options? : SwitcherOptions);

  /**
   *
   */
  export interface TabOptions {

  }

  /**
   *
   * @param el
   * @param options
   */
  export function tab(el : HTMLElement, options? : TabOptions);


  /**
   * Button mode
   */

  export type Mode = 'click' | 'hover';


  export interface NavbarOptions {
    align : string;
    mode : Mode;
    'delay-show' : number;
    'delay-hide' : number;
  }

  /**
   * @group uikit
   * @groupIcon fab fa-uikit
   * @param el
   * @param options
   */
  export function navbar(el : HTMLElement, options? : NavbarOptions);


  export type TooltipPosition =
    'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right';


  export interface TooltipOptions {
    title? : string;
    pos? : TooltipPosition;
    offset? : number;
    animation? : string;
    duration? : number;
    delay? : number;
    cls? : string;
  }


  /**
   *
   * @group uikit
   */
  export function tooltip(el : HTMLElement, options? : TooltipOptions | string);


  export type OffcanvasMode =
    'slide'
    | 'reveal'
    | 'push'
    | 'none';


  export interface OffcanvasOptions {
    mode? : OffcanvasMode;
    flip? : boolean;
    overlay? : boolean;
    "esc-close"? : boolean;
    "bg-close"? : boolean;
    container? : string;
  }

  /**
   *
   * @group uikit
   */
  export function offcanvas(el : HTMLElement, options? : OffcanvasOptions) : Offcanvas;

  export class Offcanvas {
    show() : void;

    hide() : void;
  }
}


