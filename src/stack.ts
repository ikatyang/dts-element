import {Element} from './element';
import {instance_of, IConstructor} from './utils/instance-of';

export class Stack {

  public raw_stack: Element[];

  constructor(raw_stack: Element[] = []) {
    this.raw_stack = raw_stack;
  }

  public push(element: Element): Stack {
    return new Stack([...this.raw_stack, element]);
  }

  public instances_of(constructors: IConstructor<Element>[]): boolean {
    return (this.raw_stack.length < constructors.length)
      ? false
      : this.raw_stack
        .slice(0, constructors.length)
        .every(instance_of(constructors));
  }

  public last_instances_of(constructors: IConstructor<Element>[]): boolean {
    return (this.raw_stack.length < constructors.length)
      ? false
      : this.raw_stack
        .slice(-constructors.length)
        .reverse()
        .every(instance_of(constructors));
  }

}
