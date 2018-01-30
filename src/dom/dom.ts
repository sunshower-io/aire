import {UUID} from "aire/lib/lang";

export module dom {
    export function $(s: string): Element {
        return document.querySelector(s);
    }
}

export declare type Class = Function;


export function generated(instance: any, key: string) {
    let value = this[key] || UUID.random(),
        getter = function (): string {
            return value;
        },
        setter = function (v: string): void {
            value = v;
        };
    if(delete this[key]) {

        Object.defineProperty(instance, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}