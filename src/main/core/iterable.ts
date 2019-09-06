import {Repeat, createFullOverrideContext} from "aurelia-templating-resources";
import {noView} from 'aurelia-framework';


/**
 * @group components
 */
@noView
export class IterableValueConverter {

  instanceChanged(repeat : Repeat, items : any) : void {
    let removePromise = repeat.removeAllViews(
      true,
      true
    );

    if (removePromise instanceof Promise) {
      removePromise.then(() => this.doProcess(repeat, items));
      return;
    }
    this.doProcess(repeat, items);
  }

  private doProcess(repeat, items) {
    let index = 0;
    for (let [key, value] of items) {
      let overrideContext = createFullOverrideContext(
        repeat,
        value,
        index,
        undefined,
        key
      ),
        view = repeat.viewFactory.create();
      view.bind(overrideContext.bindingContext, overrideContext);
      repeat.viewSlot.add(view);
      ++index;
    }
  }

  instanceMutated(repeat : Repeat, items : any, changes : any) : void {
  }

  getCollectionObserver(observerLocator : any, items : any) : any {
  }
}