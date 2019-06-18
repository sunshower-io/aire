import {newComponent}    from "test/render";
import {bootstrap}       from 'aurelia-bootstrapper';
import {ComponentTester} from "aurelia-testing";

export * from 'test/render';


export async function expectComponent(
  template : string,
  ctx : any,
  action : (a : ComponentTester, b? : any) => void,
  done : () => void
) {
  let component = newComponent(template, ctx),
    aurelia = null;
  await component.create(bootstrap);
  action(component, aurelia);
  component.dispose();
  done();
}