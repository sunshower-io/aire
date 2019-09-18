import {Prism} from 'prismjs';

import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css!";


import {
  bindable,
  customElement
} from 'aurelia-framework';


@customElement('aire-code')
export class AireCode {


  @bindable
  public code : string;

  @bindable
  public language : string;

  /**
   * Code the user places in here
   */
  private contents : HTMLDivElement;


  /**
   *
   * Our formatted code
   */
  private rendered : HTMLPreElement;


  attached() : void {
    let rendered = this.rendered;
    let language = this.language,
      html = this.code;


    if (html) {
      let txt = Prism.highlight(html, Prism.languages[language], language);
      rendered.innerHTML = txt;
    }

  }

}
