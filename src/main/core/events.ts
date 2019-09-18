import {DOM} from 'aurelia-pal';


export module dom {
  export function createEvent(name : string, value : any) : Event {
    return DOM.createCustomEvent(
      name,
      {
        bubbles: true,
        detail : value
      }
    );
  }

}

