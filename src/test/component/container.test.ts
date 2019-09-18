import {current, expectComponent} from "test/core";
import {AireContainer}            from "aire/component/container";
beforeEach(() => {
  current.push('component/container');
});

afterEach(() => {
  current.pop();
});

test('a container must decorate itself correctly for each of its attributes', async (done) => {


  for(let [name, cl] of AireContainer.attributes) {
    let template = `div(aire-container ${name})`;
    await expectComponent(template, {}, (a, v) => {
      let div = document.querySelector('.uk-container') as HTMLElement;
      expect(div).toBeTruthy();
      expect(div.classList.contains(`${cl}`)).toBeTruthy();
    }, done);
  }


});