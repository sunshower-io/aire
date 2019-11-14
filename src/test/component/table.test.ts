import {current, expectComponent} from "test/core";
import {AireTable}            from "aire/component/table";
import {AireColumn} from "aire/component/column";
import {AireTableCell} from "aire/component/table-cell";

let components = ['table', 'column', 'table-cell', 'table-footer', 'table-header'];

beforeEach(() => {
    for (let component of components) {
        current.push(`component/${component}`);
    }
});

afterEach(() => {
    for (let component of components) {
        current.pop();
    }
});

let defaultTemplate = `aire-table
                            aire-column
                                aire-table-header(content="Header")
                                aire-table-cell(content="Cell")
                                aire-table-footer(content="Footer")`;

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

test('a table has no caption by default', async (done) => {
    await expectComponent('aire-table', {}, () => {
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

test('a table has no header by default', async (done) => {
    await expectComponent('aire-table', {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            header = document.querySelector('.uk-table thead');
        expect(table).toBeTruthy();
        expect(header).toBeFalsy();
    }, done)
});

test('a table has no body by default', async (done) => {
    await expectComponent('aire-table', {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            body = document.querySelector('.uk-table tbody');
        expect(table).toBeTruthy();
        expect(body).toBeFalsy();
    }, done)
});

test('a table has no footer by default', async (done) => {
    await expectComponent('aire-table', {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            footer = document.querySelector('.uk-table tfoot');
        expect(table).toBeTruthy();
        expect(footer).toBeFalsy();
    }, done)
});

test('a table has a header if a column has a header cell', async(done) => {
    await expectComponent(defaultTemplate, {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            header = document.querySelector('.uk-table thead'),
            th = document.querySelector('.uk-table thead th');
        expect(table).toBeTruthy();
        expect(header).toBeTruthy();
        expect(th).toBeTruthy();
    }, done)
});

test('a table has a body if a column has a body cell', async(done) => {
    await expectComponent(defaultTemplate, {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            body = document.querySelector('.uk-table tbody'),
            td = document.querySelector('.uk-table tbody td');
        expect(table).toBeTruthy();
        expect(body).toBeTruthy();
        expect(td).toBeTruthy();
    }, done)
});

test('a table has a footer if a column has a footer cell', async(done) => {
    await expectComponent(defaultTemplate, {}, () => {
        let table = document.querySelector('.uk-table') as HTMLElement,
            footer = document.querySelector('.uk-table tfoot'),
            td = document.querySelector('.uk-table tfoot td');
        expect(table).toBeTruthy();
        expect(footer).toBeTruthy();
        expect(td).toBeTruthy();
    }, done)
});

test('a cell has bindable content', async(done) => {
   await expectComponent(defaultTemplate, {}, () => {
       let headerCell = document.querySelector('.uk-table thead th'),
           bodyCell = document.querySelector('.uk-table tbody td'),
           footerCell = document.querySelector('.uk-table tfoot td');

       expect(headerCell.textContent.toString()).toBe("Header");
       expect(bodyCell.textContent.toString()).toBe("Cell");
       expect(footerCell.textContent.toString()).toBe("Footer");
   })
});

test('a column must decorate itself correctly for each of its widths', async (done) => {
    for(let name of AireColumn.widths) {
        let template = `aire-table
                            aire-column(${name})
                                aire-table-cell`;
        await expectComponent(template, {}, () => {
            let cell = document.querySelector('.uk-table td');
            expect(cell).toBeTruthy();
            expect(cell.classList.contains(`uk-table-${name}`)).toBeTruthy();
        });
    }
    done();
});

test('a column must have no more than one width applied', async (done) => {
    let firstMod = AireColumn.widths[0],
        secondMod = AireColumn.widths[1],
        template = `aire-table
                            aire-column(${firstMod} ${secondMod})
                                aire-table-cell`;

    await expectComponent(template, {}, () => {
        let cell = document.querySelector('.uk-table td');
        expect(cell).toBeTruthy();
        expect(cell.classList.contains(`uk-table-${firstMod}`)).toBeTruthy();
        expect(cell.classList.contains(`uk-table-${secondMod}`)).toBeFalsy();
    });

    done();
});

test('a cell can contain a link', async(done) => {
    let cellContent = "Sunshower",
        template = `aire-table
                        aire-column
                            aire-table-cell(href.bind="href" content.bind="content")`,
        ctx = {href: "https://sunshower.io", content: cellContent};

   await expectComponent(template, ctx, () => {
       let cell = document.querySelector('.uk-table td'),
            link = document.querySelector('.uk-table td a');

       expect(cell).toBeTruthy();
       expect(link).toBeTruthy();
       expect(cell.classList.contains('uk-table-link')).toBeTruthy();
       expect(link.classList.contains('uk-link-reset')).toBeTruthy();
       expect(link.textContent.toString()).toBe(cellContent);
   });

   done();
});

test('a cell must decorate itself correctly for each of its styles', async (done) => {
    for (let name of AireTableCell.modifiers) {
        let         template = `aire-table
                            aire-column()
                                aire-table-cell(${name} content="cell content")`;

        await expectComponent(template, {}, () => {
            let cell = document.querySelector('.uk-table td');
            expect(cell).toBeTruthy();
            expect(cell.classList.contains(`uk-table-${name}`)).toBeTruthy()
        });
    }
    done();
});

test('a cell must decorate itself correctly for each of its text styles', async (done) => {
    for (let name of AireTableCell.textModifiers) {
        let         template = `aire-table
                            aire-column()
                                aire-table-cell(${name} content="cell content")`;

        await expectComponent(template, {}, () => {
            let cell = document.querySelector('.uk-table td');
            expect(cell).toBeTruthy();
            expect(cell.classList.contains(`uk-text-${name}`)).toBeTruthy()
        });
    }
    done();
});