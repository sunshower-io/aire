export module dom {
    export function $(s:string) : Element {
        return document.querySelector(s);
    }
}