import {
  expectComponent
}                        from "test/core";


test(`a button must be creatable`, async (done) => {
  let
    label = "Hello homeskillet!",
    template = `
        aire-button(label.bind="label" href="coolbeans")
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
  await expectComponent(template, {label}, async (cmp, a) => {
    let button = document.querySelector('button');
    expect(button.innerHTML).toBe(label);
    (button as any).click();
    button = document.querySelector('button');
    await setTimeout(() => {});
    expect(button.innerHTML).toBe("sup");
  }, done);

});
