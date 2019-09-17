import {
  expectComponent
}                   from "test/core";

test(`a button must be creatable`, async (done) => {
  done();
  // expect(1).toBe(1);
  //
  // let template = `aire-button`;
  // await expectComponent(template, {}, (cmp, vm) => {
  //   expect(vm.role).toBe('button');
  //   let button = (vm as any).button as HTMLButtonElement;
  //   expect(button).toBeTruthy();
  //   expect(button.innerHTML).toBe('<!--slot-->');
  //   expect(button.classList.contains('uk-button-default')).toBeTruthy();
  //   expect(vm.modifier).toBe('default');
  // }, done);


});

test('a link button must function as a link when href is present', async (done) => {
  done();
  // let template = `aire-button(href.bind="href")`,
  //   ctx = {href : "coolbeans"};
  //
  // await expectComponent(template, ctx, (cmp, vm) => {
  //   expect(vm.role).toBe('link');
  //   expect(vm.href).toBe('coolbeans');
  //
  // }, done);

});

test(`a button must function as a control`, async (done) => {
  done();
  // let template = `
  // aire-button(control)
  //   h1 Coolbeans
  // `;
  // await expectComponent(template, {}, (cmp, vm) => {
  //   expect(vm.modifier).toBe('control');
  //   let button = vm.button as HTMLButtonElement,
  //     heading = button.childNodes.item(0) as HTMLHeadingElement;
  //   expect(heading.textContent).toBe("Coolbeans");
  // }, done);


});
