export module dom {
  export function decorateTo(
    sourceEl : Element,
    el : Element,
    decoration : string,
    className? : string
  ) : boolean {
    if (sourceEl.hasAttribute(decoration)) {
      if (className) {
        el.classList.add(className);
      } else {
        el.classList.add(decoration);
      }
      return true;
    }
    return false;
  }


  export function setStyle(el:HTMLElement, style: string) : boolean {
    let clist = el.classList,
      set = clist.contains(style);
    clist.add(style);
    return !set;
  }

  export function unsetStyle(el: HTMLElement, style: string) : boolean {
    let clist = el.classList,
      set = clist.contains(style);
    clist.remove(style);
    return set;
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
