

import {
  customElement,
  bindable
} from 'aurelia-framework';


@customElement('aire-checkbox')
export class AireCheckbox {

  @bindable public checked: boolean;

  checkedChanged() {
    console.log("Bound?", this.checked);
  }
}
