declare module "uikit" {

  export type Mode = 'click' | 'hover';


  export interface NavbarOptions {
    align : string;
    mode : Mode;
    'delay-show' : number;
    'delay-hide' : number;
  }

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
    animation ?: string;
    duration ?: number;
    delay ?: number;
    cls ?: string;
  }


  export function tooltip(el : HTMLElement, options? : TooltipOptions | string);
}


