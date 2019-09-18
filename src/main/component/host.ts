import {
  inject,
  customAttribute
} from 'aurelia-framework';

/**
 * @description
 * Specify a host-element for elements that attach to a specific location in the DOM
 */
@inject(Element)
@customAttribute('host')
export class Host {
  value : string;


  host : Element;
  target : Target;

  constructor(readonly el : Element) {

  }

  bind() {
    this.parseTarget();
    this.locateHost();
    this.setHost();
  }


  private setHost() : void {
    let au = (this.el as any).au;
    if (!au) {
      throw new Error("Attempted to set host for a non-Aire element");
    }
    let controller = au.controller,
      viewModel = controller.viewModel;

    if(!viewModel.host) {
      throw new Error(`host '${viewModel} is not capable of hosting anything (no host property)`);
    }
    viewModel.host = this.host;
  }

  private locateHost() : void {
    let target = this.target;
    switch (target.direction) {
      case 'ancestor':
        this.resolveAncestralHost();
        break;
      case 'descendant':
        this.resolveDescendantHost();
        break;
      default:
        throw new Error("Invalid direction: " + target.direction);
    }

  }

  private parseTarget() : void {
    let value = this.value;
    if (!value) {
      throw new Error("host requires a target " +
        "of the form <ancestor|descendant>:<html-tag>.<property>");
    }

    let parts = value.split(/[:\.]/);
    if (parts.length != 2) {
      console.log(parts);
      throw new Error(`Invalid value: '${value}'.  Expected <ancestor|descendant>:<html-tag>.property`);
    }


    this.target = {
      direction : parts[0] as Direction,
      element   : parts[1]
    };
  }

  private resolveAncestralHost() : void {
    let target = this.target,
      name = target.element;
    for (let el = this.el; !!el; el = el.parentElement) {
      if (el.nodeName.toLowerCase() === name) {
        this.host = el;
        return;
      }
    }
    throw new Error("No ancestor with tag-name: " + name + " found");
  }




  private resolveDescendantHost() {
    let
      nodes = [this.el],
      targetName = this.target.element;
    while (!!nodes.length) {
      let node = nodes.shift(),
        name = node.nodeName.toLowerCase();
      if (name === targetName) {
        this.host = node;
        return;
      } else {
        let children = node.children;
        for (let i = 0; i < children.length; i++) {
          nodes.push(children.item(i));
        }
      }
    }
    throw new Error("No descendant with tag-name: " + name + " found");
  }

}

type Direction = 'ancestor' | 'descendant';

interface Target {
  direction : Direction;
  element : string;

}

