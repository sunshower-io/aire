import {
  TaskQueue,
  Task,
  Aurelia
}                   from "aurelia-framework";
import {isFunction} from "aire/core/lang";

export class Aire {

  taskQueue : TaskQueue;


}


export enum TaskType {
  Micro,
  Macro
}

export type InitFunction = (aurelia : Aurelia, aire : Aire) => void;

export interface InitType {
  initialize(aurelia : Aurelia, aire : Aire);
}


export type Initializer = InitFunction | InitType;

export module Aire {

  let INSTANCE : Aire;

  let initializers = [];


  export function enqueue(task : Task | Function, type : TaskType = TaskType.Micro) {
    let tqueue = INSTANCE.taskQueue;
    switch (type) {
      case TaskType.Macro:
        tqueue.queueTask(task);
        break;
      case TaskType.Micro:
        tqueue.queueMicroTask(task);
    }
  }

  export function registerInitializer(initializer : Initializer) {
    initializers.push(initializer);
  }

  export function initialize(aurelia : Aurelia) {
    let aire = new Aire();
    aurelia.container.registerSingleton(Aire, Aire);

    for (let initializer of initializers) {
      if (isFunction(initializer)) {
        initializer(aurelia, aire);
      } else {
        initializer.initialize(aurelia, aire);
      }
    }
    initializers = null;
    INSTANCE = aire;
  }
}


class QueueInitializer implements InitType {
  initialize(aurelia : Aurelia, aire : Aire) {
    aire.taskQueue = aurelia.container.get(TaskQueue);
  }
}

Aire.registerInitializer(new QueueInitializer());