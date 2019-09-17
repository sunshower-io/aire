import {
  bindable,
  customElement
} from 'aurelia-framework';


@customElement('aire-tab')
export class AireTab {

  @bindable
  public title: string;

  public contents: HTMLDivElement;



}