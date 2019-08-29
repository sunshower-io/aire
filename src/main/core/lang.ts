
export module Lazy {

  export function over(o: Object, f:(k, v) => void) {

    for(let k of Lazy.keys(o)) {
      f(k, o[k]);
    }
  }


  export function * keys(o:Object) : IterableIterator<string> {
    for(let i in o) {
      if(o.hasOwnProperty(i)) {
        yield i;
      }
    }
  }
}

export module Strict {

}



export function isFunction(obj:any) : boolean {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}