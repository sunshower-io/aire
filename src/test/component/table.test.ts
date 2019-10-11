import {current, expectComponent} from "test/core";
import {AireTable}            from "aire/component/table";
beforeEach(() => {
    current.push('component/table');
});

afterEach(() => {
    current.pop();
});

let items = [
    ["Row 1 Item 1", "Row 1 Item 2"],
    ["Row 2 Item 1", "Row 2 Item 2"],
    ["Row 3 Item 1", "Row 3 Item 2"]
];

let columns = [
    "Column 1", "Column 2"
];

let defaultTemplate = 'aire-table(source.bind="source" columns.bind="columns")',
    defaultCtx = {source: items, columns: columns};

test('a table must decorate itself correctly for each of its attributes', async (done) => {
    for(let name of AireTable.modifiers) {
        let template = `aire-table(${name})`;
        await expectComponent(template, {}, () => {
            let table = document.querySelector('.uk-table') as HTMLElement;
            expect(table).toBeTruthy();
            expect(table.classList.contains(`uk-table-${name}`)).toBeTruthy();
        });
    }
    done();
});


test('a table must not override its additional modifier styling', async (done) => {
    let firstMod = AireTable.modifiers[0],
        secondMod = AireTable.modifiers[1],
        template = `aire-table(${firstMod} ${secondMod})`;

    await expectComponent(template, {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement;
        expect(table).toBeTruthy();
        expect(table.classList.contains(`uk-table-${firstMod}`)).toBeTruthy();
        expect(table.classList.contains(`uk-table-${secondMod}`)).toBeTruthy();
    }, done)
});

test('a table must decorate itself correctly for each of its sizes', async (done) => {
    for(let name of AireTable.sizes) {
        let template = `aire-table(${name})`;
        await expectComponent(template, {}, () => {
            let table = document.querySelector('.uk-table') as HTMLElement;
            expect(table).toBeTruthy();
            expect(table.classList.contains(`uk-table-${name}`)).toBeTruthy();
        });
    }
    done();
});

test('a table must have no more than one size applied', async (done) => {
    let firstMod = AireTable.sizes[0],
        secondMod = AireTable.sizes[1],
        template = `aire-table(${firstMod} ${secondMod})`;

    await expectComponent(template, {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement;
        expect(table).toBeTruthy();
        expect(table.classList.contains(`uk-table-${firstMod}`)).toBeTruthy();
        expect(table.classList.contains(`uk-table-${secondMod}`)).toBeFalsy();
    }, done)
});

test('a table must have a bindable source', async (done) => {
    await expectComponent('aire-table(source.bind="source")', {source: items}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            rows = document.querySelectorAll('.uk-table tbody tr'),
            cells = document.querySelectorAll('.uk-table tbody td');
        expect(table).toBeTruthy();
        expect(rows).toBeTruthy();
        expect(rows.length).toBe(3);
        expect(cells).toBeTruthy();
        expect(cells.length).toBe(6);
    }, done)
});

test('a table must have bindable columns', async (done) => {
    await expectComponent(defaultTemplate, defaultCtx, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            thead = document.querySelector('.uk-table thead'),
            cells = document.querySelectorAll('.uk-table th');
        expect(table).toBeTruthy();
        expect(thead).toBeTruthy();
        expect(cells).toBeTruthy();
        expect(cells.length).toBe(2);
    }, done)
});

test('a table may optionally not have a header', async (done) => {
    await expectComponent('aire-table(source.bind="source" header.bind="header")', {source: items, header: false}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            thead = document.querySelector('.uk-table thead');
        expect(table).toBeTruthy();
        expect(thead).toBeFalsy();
    }, done)
});

test('a table has no footer by default', async (done) => {
    await expectComponent(defaultTemplate, defaultCtx, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            tfoot = document.querySelector('.uk-table tfoot');
        expect(table).toBeTruthy();
        expect(tfoot).toBeFalsy();
    }, done)
});

test('a table may optionally have a footer', async (done) => {
    await expectComponent('aire-table(source.bind="source" columns.bind="columns" footer)', defaultCtx, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            tfoot = document.querySelector('.uk-table tfoot'),
            cells = document.querySelectorAll('.uk-table tfoot td');
        expect(table).toBeTruthy();
        expect(tfoot).toBeTruthy();
        expect(cells).toBeTruthy();
        expect(cells.length).toBe(2)
    }, done)
});

test('a table has no caption by default', async (done) => {
    await expectComponent(defaultTemplate, defaultCtx, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            caption = document.querySelector('.uk-table caption');
        expect(table).toBeTruthy();
        expect(caption).toBeFalsy();
    }, done)
});

test('a table will have a caption of caption text is provided', async (done) => {
    let text = "This is a caption!";
    await expectComponent('aire-table(caption.bind="caption")', {caption: text}, () => {
        let table = document.querySelector('.uk-table'),
            caption = document.querySelector('.uk-table caption');
        expect(table).toBeTruthy();
        expect(caption).toBeTruthy();
        expect(caption.textContent.toString()).toBe(text);
    }, done)
});