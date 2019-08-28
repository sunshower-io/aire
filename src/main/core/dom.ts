export module dom {
  export function decorateTo(
    sourceEl : Element,
    el : Element,
    decoration : string,
    className? : string
  ) {
    if (sourceEl.hasAttribute(decoration)) {
      if (className) {
        el.classList.add(className);
      } else {
        el.classList.add(decoration);
      }
    }
  }

  export function decorate(
    el : Element,
    decoration : string,
    className? : string
  ) : boolean {
    if (el.hasAttribute(decoration)) {
      if (className) {
        el.classList.add(className);
      } else {
        el.classList.add(decoration);
      }
      return true;
    }
    return false;
  }
}
