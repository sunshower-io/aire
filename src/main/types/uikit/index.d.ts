declare module "uikit" {

  export type Mode = 'click' | 'hover';


  export interface NavbarOptions {
    align: string;
    mode: Mode;
    'delay-show': number;
    'delay-hide': number;
  }

  export function navbar(el: HTMLElement, options?: NavbarOptions);

}