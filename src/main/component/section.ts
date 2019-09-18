import {
  customAttribute
}               from 'aurelia-framework';
import {Strict} from "aire/core/lang";
import {dom}    from "aire/core/dom";


/**
 *
 */

@customAttribute('aire-section')
export class AireSection {



  constructor(el: Element) {
    dom.setAttributes(el, AireSection.Sizes.attributes);
    dom.setAttributes(el, AireSection.Styles.attributes);
  }

}


export module AireSection {
  export module Sizes {

    export type Size = 'xsmall'
      | 'small'
      | 'large'
      | 'xlarge'
      | 'nopad';

    export const attributes: Map<Size, string> = Strict.toMap({
      'xsmall' : 'uk-section-xsmall',
      'small' : 'uk-section-small',
      'large' : 'uk-section-large',
      'xlarge' : 'uk-section-xlarge',
      'nopad' : 'uk-padding-remove-vertical'
    });

  }


  export module Styles {
    export type Style = 'default'
      | 'muted'
      | 'primary'
      | 'secondary';


    export const attributes: Map<Style, string> = Strict.toMap({
      'default' : 'uk-section-default',
      'muted' : 'uk-section-muted',
      'primary': 'uk-section-primary',
      'secondary' : 'uk-section-secondary'
    });

  }
}