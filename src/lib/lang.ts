export * from "aire/lib/uuid";
export * from "aire/lib/types";

export const range = (start, end) =>
    Array.from({length: (end - start)}, (v, k) => k + start);


var falsy = /^(?:f(?:alse)?|no?|0+)$/i;
export const parseBoolean: (o:any) => boolean = (val) => {
    return !falsy.test(val) && !!val;
};