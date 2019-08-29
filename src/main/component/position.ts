import {
  inject,
  customAttribute
}                         from 'aurelia-framework';
import {isFunction, Lazy} from "aire/core/lang";
import {Positionable}     from "aire/component/positionable";

@inject(Element)
@customAttribute('position')
export class AirePosition {

  value: string;

  constructor(readonly el: Element) {

  }

  bind() : void {
    let
      el = this.el,
      au = el && (el as any).au,
      value = this.value;

    if(au) {
      Lazy.over(au, (_, controller) => {
        let vm = controller && controller.viewModel;
        if(vm && vm.position) {
          let pos = vm as Positionable;
          pos.position = value;
          console.log(value);
        }
      });
    }
  }

}