import {newComponent}    from "test/render";
import {ComponentTester} from "aurelia-testing";
import {Aurelia}         from 'aurelia-framework';
import {bootstrap}       from 'aurelia-bootstrapper';

export * from 'test/render';


export async function expectComponent(
  template : string,
  ctx : any,
  action : (a : ComponentTester, b? : Aurelia) => void,
  done ?: () => void
) {
  let component = newComponent(template, ctx);
  
  await component.create(bootstrap);
  let aurelia = (component as any).aurelia;
  await action(component, aurelia);
  component.dispose();
  if(done) {
    done();
  }
}