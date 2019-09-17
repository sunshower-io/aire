import {
  bindable,
  autoinject,
  customElement
} from 'aurelia-framework';

import "prismjs/components/prism-pug";
import 'prismjs/themes/prism-coy.css!';

import {ViewFactory} from "aire/core/view-factory";

@autoinject
@customElement('example-panel')
export class ExamplePanel {

  @bindable
  private example: string;

  private contents:HTMLDivElement;

  constructor(readonly factory: ViewFactory) {

  }

  attached() : void {
    this.factory.insert(this.contents, `<template>${this.example}</template>`);
  }


}