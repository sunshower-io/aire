import {
  bindable,
  customElement

} from 'aurelia-framework';


import * as showdown from 'showdown';

@customElement('aire-markdown')
export class AireMarkdown {



  @bindable public content: string;


  private container:HTMLDivElement;

  attached() : void {
    let converter = new showdown.Converter();
    let html = converter.makeHtml(this.content);
    this.container.innerHTML = html;
  }
}