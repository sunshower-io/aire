import * as pug from 'pug';

import {PLATFORM}       from 'aurelia-pal';
import {
  StageComponent,
  ComponentTester
} from 'aurelia-testing';

export function render(template: string, options?:any) : string {
  return pug.compile(template.trim())(options);
}


export function newComponent(
  template: string,
  bindingContext: any,
  ...moduleNames:string[]
) : ComponentTester {
  if(!(moduleNames && moduleNames.length)) {
    moduleNames = ['component/button'];
    // throw new Error("Component wasn't found");
  }
  return StageComponent.withResources(
    moduleNames.map(t => PLATFORM.moduleName(t)))
                       .inView(render(template)).boundTo(bindingContext);
}