import {DOM} from 'aurelia-pal';


export function createEvent(name : string, value : any) : Event {
  return DOM.createCustomEvent(
    name,
    {
      detail : value
    }
  );
}
