jest.unmock('../stack');

import {Element} from '../element';
import {Stack} from '../stack';
import {IConstructor} from '../utils/instance_of';

const create_element_class = (): IConstructor<Element> => class TestElement extends Element {
  public get default_parameters(): any {
    return {};
  }
  // tslint:disable-next-line:prefer-function-over-method
  public _emit(): string {
    return '';
  }
};

// tslint:disable:variable-name
const TestElementA = create_element_class();
const TestElementB = create_element_class();
const TestElementC = create_element_class();
// tslint:enable variable-name

const test_element_a = new TestElementA({});
const test_element_b = new TestElementB({});
const test_element_c = new TestElementC({});

describe('#push()', () => {
  it('should return a new stack with pushed raw_stack', () => {
    const stack = new Stack();
    const pushed_stack = stack.push(test_element_a);
    expect(pushed_stack).not.toBe(stack);
    expect(pushed_stack.raw_stack).toEqual([test_element_a]);
  });
});

const stack = new Stack([test_element_a, test_element_b, test_element_c]);

describe('#instances_of()', () => {
  it('should return false if constructos.length is larger than raw_stack.length', () => {
    expect(stack.instances_of([TestElementA, TestElementA, TestElementA, TestElementA])).toBe(false);
  });
  it('should check front elements using constructors', () => {
    expect(stack.instances_of([TestElementA, TestElementB])).toBe(true);
    expect(stack.instances_of([TestElementA, TestElementC])).toBe(false);
  });
});

describe('#last_instances_of()', () => {
  it('should return false if constructos.length is larger than raw_stack.length', () => {
    expect(stack.last_instances_of([TestElementA, TestElementA, TestElementA, TestElementA])).toBe(false);
  });
  it('should check last elements using constructors', () => {
    expect(stack.last_instances_of([TestElementC, TestElementB])).toBe(true);
    expect(stack.last_instances_of([TestElementA, TestElementC])).toBe(false);
  });
});
