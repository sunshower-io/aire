export module Lazy {

  /**
   *
   * don't do that suckas
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
   * supfools
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
}

export module Strict {

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