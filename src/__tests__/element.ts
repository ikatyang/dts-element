jest.unmock('../element');

import {Element} from '../element';

// tslint:disable max-classes-per-file prefer-function-over-method

const default_value = 'default';

const user_set = 'user-set';
const user_defined = 'user-defined';

// tslint:disable-next-line no-unused-variable
interface INormalRequiredParameters { required: string; }
interface INormalOptionalParameters { optional: string; }
class NormalElement extends Element<INormalRequiredParameters, INormalOptionalParameters> {
  public get default_parameters(): INormalOptionalParameters {
    return {optional: default_value};
  }
  public _emit(): string {
    return '';
  }
}

interface INestedParameters {
  prime: string;
  array: string[];
  object: { [key: string]: string };
  element: Element<any, any>;
}
class NestedElement extends Element<{}, INestedParameters> {
  public get default_parameters(): INestedParameters {
    return {
      prime: 'string',
      array: ['1', '2', '3'],
      object: {key: 'value'},
      element: new NormalElement({required: 'string'}),
    };
  }
  public _emit(): string {
    return '';
  }
}

describe('#constructor', () => {
  it('should set #parameters with default parameters', () => {
    const element = new NormalElement({required: user_defined});
    expect(element.parameters).toEqual({required: user_defined, optional: default_value});
  });
  it('should set #parameters without default parameters', () => {
    const element = new NormalElement({required: user_defined, optional: user_defined});
    expect(element.parameters).toEqual({required: user_defined, optional: user_defined});
  });
});

describe('#get()', () => {
  it('should return specified parameter', () => {
    const element = new NormalElement({required: user_defined});
    expect(element.get('required')).toBe(user_defined);
  });
});

describe('#set()', () => {
  it('should set specified parameter and return self for chaining', () => {
    const element = new NormalElement({required: user_defined});
    expect(element.set({required: user_set})).toBe(element);
    expect(element.parameters.required).toBe(user_set);
  });
});

describe('#clone()', () => {
  it('should return shallow-cloned element by default', () => {
    const element = new NestedElement({});
    const cloned_element = element.clone();
    expect(element).not.toBe(cloned_element);
    expect(element.parameters).not.toBe(cloned_element.parameters);
    expect(element.parameters).toEqual(cloned_element.parameters);
    expect(element.parameters.prime).toBe(cloned_element.parameters.prime);
    expect(element.parameters.array).toBe(cloned_element.parameters.array);
    expect(element.parameters.object).toBe(cloned_element.parameters.object);
    expect(element.parameters.element).toBe(cloned_element.parameters.element);
  });
  it('should return deep-cloned element with is_deep_clone = true', () => {
    const element = new NestedElement({});
    const cloned_element = element.clone(true);
    expect(element).not.toBe(cloned_element);
    expect(element.parameters).not.toBe(cloned_element.parameters);
    expect(element.parameters).toEqual(cloned_element.parameters);
    expect(element.parameters.prime).toBe(cloned_element.parameters.prime);
    expect(element.parameters.array).not.toBe(cloned_element.parameters.array);
    expect(element.parameters.object).not.toBe(cloned_element.parameters.object);
    expect(element.parameters.element).not.toBe(cloned_element.parameters.element);
  });
});

describe('#copy()', () => {
  it('should return shallow-copied self by default', () => {
    const target_element = new NestedElement({});
    const element = new NestedElement({});
    const copied_element = element.copy(target_element);
    expect(element).toBe(copied_element);
    expect(element.parameters).not.toBe(target_element.parameters);
    expect(element.parameters).toEqual(target_element.parameters);
    expect(element.parameters.prime).toBe(target_element.parameters.prime);
    expect(element.parameters.array).toBe(target_element.parameters.array);
    expect(element.parameters.object).toBe(target_element.parameters.object);
    expect(element.parameters.element).toBe(target_element.parameters.element);
  });
  it('should return deep-copied self with is_deep_copy = true', () => {
    const target_element = new NestedElement({});
    const element = new NestedElement({});
    const copied_element = element.copy(target_element, true);
    expect(element).toBe(copied_element);
    expect(element.parameters).not.toBe(target_element.parameters);
    expect(element.parameters).toEqual(target_element.parameters);
    expect(element.parameters.prime).toBe(target_element.parameters.prime);
    expect(element.parameters.array).not.toBe(target_element.parameters.array);
    expect(element.parameters.object).not.toBe(target_element.parameters.object);
    expect(element.parameters.element).not.toBe(target_element.parameters.element);
  });
});

class SubNormalElement extends NormalElement {}

describe('#equal()', () => {
  const required = 'required';
  const normal_element_1 = new NormalElement({required});
  const normal_element_2 = new NormalElement({required});
  const sub_normal_element = new SubNormalElement({required});
  const nested_element_1 = new NestedElement({});
  const nested_element_2 = new NestedElement({});
  const nested_element_3 = new NestedElement({
    array: ['1', '2', '3', '4'],
  });
  const nested_element_4 = new NestedElement({
    object: {key1: 'value1', key2: 'value2'},
  });
  it('should compare directly while is_deep_equal = false', () => {
    expect(normal_element_1.equal(normal_element_1)).toBe(true);
    expect(normal_element_1.equal(normal_element_2)).toBe(false);
    expect(normal_element_1.equal(sub_normal_element)).toBe(false);
    expect(nested_element_1.equal(nested_element_1)).toBe(true);
    expect(nested_element_1.equal(nested_element_2)).toBe(false);
    expect(nested_element_1.equal(nested_element_3)).toBe(false);
    expect(nested_element_1.equal(nested_element_4)).toBe(false);
  });
  it('should compare its constructor and parameters while is_deep_equal = true', () => {
    expect(normal_element_1.equal(normal_element_1, true)).toBe(true);
    expect(normal_element_1.equal(normal_element_2, true)).toBe(true);
    expect(normal_element_1.equal(sub_normal_element, true)).toBe(false);
    expect(nested_element_1.equal(nested_element_1, true)).toBe(true);
    expect(nested_element_1.equal(nested_element_2, true)).toBe(true);
    expect(nested_element_1.equal(nested_element_3, true)).toBe(false);
    expect(nested_element_1.equal(nested_element_4, true)).toBe(false);
  });
});

describe('#has()', () => {
  const required = 'required';
  const normal_element = new NormalElement({required});
  const nested_element = new NestedElement({
    element: normal_element,
  });
  const nested_nested_element = new NestedElement({
    element: new NestedElement({
      element: normal_element,
    }),
  });
  it('should just check its own parameters while is_deep_has = false', () => {
    expect(normal_element.has(normal_element)).toBe(false);
    expect(nested_element.has(normal_element)).toBe(true);
    expect(nested_nested_element.has(normal_element)).toBe(false);
  });
  it('should check all its parameters and sub-parameters while is_deep_has = true', () => {
    expect(normal_element.has(normal_element, true)).toBe(false);
    expect(nested_element.has(normal_element, true)).toBe(true);
    expect(nested_nested_element.has(normal_element, true)).toBe(true);
  });
});
