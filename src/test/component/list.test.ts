import {current, expectComponent} from "test/core";
import {AireList}            from "aire/component/list";
beforeEach(() => {
    current.push('component/list');
});

afterEach(() => {
    current.pop();
});

let items = ["1", "2", "3"],
    defaultTemplate = 'aire-list(items.bind="items")',
    defaultCtx = {items: items};

test('a list is unordered by default', async (done) => {
    await expectComponent(defaultTemplate, defaultCtx, () => {
        let ul = document.querySelector('ul.uk-list') as HTMLElement,
            ol = document.querySelector('ol.uk-list') as HTMLElement,
            lis = document.querySelectorAll('ul.uk-list li');
        expect(ul).toBeTruthy();
        expect(ol).toBeFalsy();
        expect(lis).toBeTruthy();
        expect(lis.length).toBe(3);
    }, done)
});

test('a list may be ordered', async (done) => {
    await expectComponent('aire-list(items.bind="items" ordered)', {items: items}, () => {
        let ul = document.querySelector('ul.uk-list') as HTMLElement,
            ol = document.querySelector('ol.uk-list') as HTMLElement,
            lis = document.querySelectorAll('ol.uk-list li');
        expect(ul).toBeFalsy();
        expect(ol).toBeTruthy();
        expect(lis).toBeTruthy();
        expect(lis.length).toBe(3);
    }, done)
});

//TODO determine why only running once
// test('a list must decorate itself correctly for each of its styles', async (done) => {
//     for(let name of AireList.modifiers) {
//         let template = `aire-list(${name})`;
//         await expectComponent(template, {}, () => {
//             let list = document.querySelector('.uk-list') as HTMLElement;
//             expect(list).toBeTruthy();
//             console.log(list.classList);
//             expect(list.classList.contains(`uk-list-${name}`)).toBeTruthy();
//         }, done)
//     }
// });

