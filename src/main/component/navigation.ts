import {
  bindable,
  customElement
} from 'aurelia-framework';


@customElement('aire-navigation')
export class AireNavigation {

  @bindable
  icon: string = "fal fa-ellipsis-v-alt";
}