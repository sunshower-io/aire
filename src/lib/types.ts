

export class Value<T> {

    public value: T;
    public type:string;
    
    constructor(obj:any) {
        Object.assign(this, obj);
    }
}

export class BooleanValue extends Value<boolean> {
    
}