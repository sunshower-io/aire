import {
  inject,
  ViewCompiler,
  ViewResources,
  Container,
  ViewSlot,
  createOverrideContext
} from 'aurelia-framework';

@inject(ViewCompiler, ViewResources, Container)
export class ViewFactory {
  constructor(
    readonly viewCompiler : ViewCompiler,
    readonly resources : ViewResources,
    readonly container : Container
  ) {

  }

  insert(containerElement:HTMLElement, html:string, viewModel?:any) {
    let viewFactory = this.viewCompiler.compile(html),
      view = viewFactory.create(this.container),
      anchorIsContainer = true,
      viewSlot = new ViewSlot(containerElement, anchorIsContainer);
    viewSlot.add(view);
    view.bind(viewModel, createOverrideContext(viewModel));
    return () => {
      viewSlot.remove(view);
      view.unbind();
    };
  }
}