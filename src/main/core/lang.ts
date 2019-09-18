export module Lazy {

  /**
   *
   * @group lang
   * @groupIcon
   * fal fa-tools
   * @param o
   * @param f
   */
  export function over(o : Object, f : (k, v) => void) {

    for (let k of Lazy.keys(o)) {
      f(k, o[k]);
    }
  }


  /**
   * @group lang
   * @param o
   */
  export function* keys(o : Object) : IterableIterator<string> {
    for (let i in o) {
      if (o.hasOwnProperty(i)) {
        yield i;
      }
    }
  }

  /**
   * @group lang
   * @param o
   */

  export function * iterate<K, V>(o: Object): IterableIterator<[K, V]> {
    for(let k in o) {
      if(o.hasOwnProperty(k)) {
        yield [k as any, o[k]] as [K, V];
      }
    }
  }
}

export module Strict {

  export function flatMap<T, U>(f: (T) => U[], xs: T[]): U[] {
    return xs.reduce((acc, x) => acc.concat(f(x)), []);
  }

  export function toMap<T, U>(o: Object): Map<T, U> {
    let map = new Map<T, U>();
    for(let [k, v] of Lazy.iterate<T, U>(o)) {
      map.set(k, v);
    }
    return map;
  }

}


export function isFunction(obj : any) : boolean {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

export function debounce(
  func: () => void,
  wait:number,
  immediate?:boolean
) {
  let timeout;
  return function () {
    let context = this,
      args = arguments,
      later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}