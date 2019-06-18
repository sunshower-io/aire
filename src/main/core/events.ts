
export function createEvent(name: string, value: any): Event {
  let w = window as any;
  if (w.CustomEvent) {
    return new CustomEvent(name, {
      detail: {
        value: value
      },
      bubbles: true
    });
  } else {
    let e = document.createEvent('CustomEvent');
    e.initCustomEvent(name, true, true, {
      detail: {
        value: value
      }
    });
  }
}
