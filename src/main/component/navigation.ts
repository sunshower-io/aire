import {
  bindable,
  customElement,
  viewResources
} from 'aurelia-framework';

import {Router} from 'aurelia-router';


@viewResources('./button')
@customElement('aire-navigation')
export class AireNavigation {

  @bindable router : Router;
  @bindable visible : boolean;

  @bindable
  icon : string = "fal fa-ellipsis-v-alt";


  attached() : void {

  }
}