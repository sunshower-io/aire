import {
  expectComponent
}                        from "test/core";


test(`a button must be creatable`, async (done) => {
  let
    label = "Hello homeskillet!",
    template = `
        aire-button(label.bind="label")
  `;
  await expectComponent(template, {label}, (cmp => {
    let buttons = document.querySelectorAll('aire-button');
    expect(buttons.length).toBe(1);
  }), done);

});

test(`a button's label must be bindable`, async (done) => {
  let
    label = "Hello homeskillet!",
    template = `
    aire-button(label.bind="label")
  `;
  await expectComponent(template, {label}, (cmp, a) => {
    let button = document.querySelector('aire-button button');
    (button as any).click();



  });

});
