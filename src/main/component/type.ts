import {
  inject,
  customAttribute
} from 'aurelia-framework';

@inject(Element)
@customAttribute('aire-type')
export class AireType {


  constructor(readonly el: Element) {

  }

  valueChanged(nv: string) {
    let el = this.el,
      values = nv.split(/\s+/);
    if(el.classList.contains('aire')) {
      this.doDecorate(values, el.firstElementChild);
    } else {
      this.doDecorate(values, el);
    }
  }


  doDecorate(classes: string[], el: Element) {
    for(let cl of classes) {
      el.classList.add(`uk-${cl}`);
    }
  }

}