import {Element} from '../element';

// tslint:disable max-classes-per-file prefer-function-over-method

interface INormalRequiredParameters { required: string; }
interface INormalOptionalParameters { optional: string; }
class NormalElement extends Element<INormalRequiredParameters, INormalOptionalParameters> {
  public get default_parameters(): INormalOptionalParameters {
    return {optional: 'default'};
  }
  public _emit(): string {
    return '';
  }
}

interface INestedParameters {
  prime: string;
  array: string[];
  object: { key: string };
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
    const element = new NormalElement({required: 'user-defined'});
    expect(element.parameters).toEqual({required: 'user-defined', optional: 'default'});
  });
  it('should set #parameters without default parameters', () => {
    const element = new NormalElement({required: 'user-defined', optional: 'user-defined'});
    expect(element.parameters).toEqual({required: 'user-defined', optional: 'user-defined'});
  });
});

describe('#get()', () => {
  it('should return specified parameter', () => {
    const element = new NormalElement({required: 'user-defined'});
    expect(element.get('required')).toBe('user-defined');
  });
});

describe('#set()', () => {
  it('should set specified parameter and return self for chaining', () => {
    const element = new NormalElement({required: 'user-defined'});
    expect(element.set({required: 'user-set'})).toBe(element);
    expect(element.parameters.required).toBe('user-set');
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
