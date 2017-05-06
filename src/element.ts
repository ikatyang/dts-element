import {Stack} from './stack';

export abstract class Element<RequiredParameters extends object = any, OptionalParameters extends object = any> {

  public parameters: RequiredParameters & OptionalParameters;
  public abstract get default_parameters(): OptionalParameters;

  private _instance_of_element: true;

  constructor(parameters: RequiredParameters & Partial<OptionalParameters>) {
    this.parameters = Object.assign({}, this.default_parameters, parameters);
  }

  public get<Key extends keyof this['parameters']>(key: Key): this['parameters'][Key] {
    return this.parameters[key];
  }

  public set(values: Partial<this['parameters']>): this {
    Object.keys(values).forEach((key: keyof this['parameters']) => {
      const value = values[key];
      this.parameters[key] = value;
    });
    return this;
  }

  public clone(is_deep_clone: boolean = false): this {
    const element: this = Object.create(this.constructor.prototype);
    element.copy(this, is_deep_clone);
    return element;
  }

  public copy(element: this, is_deep_copy: boolean = false): this {
    this.parameters = this._clone_object(element.parameters, is_deep_copy);
    return this;
  }

  public equal(element: this, is_deep_equal: boolean = false): boolean {
    return this._equal(this, element, is_deep_equal);
  }

  public has(element: Element, is_deep_has: boolean = false, is_deep_equal: boolean = false): boolean {
    return this._has(this.parameters, element, is_deep_has, is_deep_equal);
  }

  public emit(stack: Stack = new Stack(), ...args: any[]): string {
    return this._emit(stack.push(this), ...args);
  }

  public abstract _emit(stack: Stack, ...args: any[]): string;

  private _clone<T>(value: T, is_deep_clone: boolean): T {
    return (typeof value !== 'object')
      ? value
      : (value instanceof Element)
        ? value.clone(is_deep_clone)
        : (value instanceof Array)
          ? this._clone_array(value, is_deep_clone)
          : this._clone_object(value, is_deep_clone);
  }

  private _clone_array<T extends any[]>(array: T, is_deep_clone: boolean): T {
    return array.map(<U>(value: U): U => this._clone_sub_value(value, is_deep_clone)) as T;
  }

  private _clone_object<T extends {}>(object: T, is_deep_clone: boolean): T {
    return Object.keys(object).reduce(
      (cloned_object: T, key: keyof T) => {
        const value = object[key];
        cloned_object[key] = this._clone_sub_value(value, is_deep_clone);
        return cloned_object;
      },
      // tslint:disable-next-line no-object-literal-type-assertion
      {} as T,
    );
  }

  private _clone_sub_value<T>(sub_value: T, is_deep_clone: boolean): T {
    return !is_deep_clone
      ? sub_value
      : this._clone(sub_value, is_deep_clone);
  }

  private _equal(a: any, b: any, is_deep_equal: boolean): boolean {
    return !is_deep_equal || (typeof a !== 'object' || typeof b !== 'object')
      ? (a === b)
      : (a.constructor !== b.constructor)
        ? false
        : (a instanceof Element)
          ? this._equal_object(a.parameters, b.parameters, is_deep_equal)
          : (a instanceof Array)
            ? this._equal_array(a, b, is_deep_equal)
            : this._equal_object(a, b, is_deep_equal);
  }

  private _equal_array(a: any[], b: any[], is_deep_equal: boolean): boolean {
    return (a.length !== b.length)
      ? false
      : a.every((value: any, index: number) => this._equal(value, b[index], is_deep_equal));
  }

  private _equal_object(a: {[key: string]: any}, b: {[key: string]: any}, is_deep_equal: boolean): boolean {
    const keys_a = Object.keys(a);
    const keys_b = Object.keys(b);
    return (keys_a.length !== new Set([...keys_a, ...keys_b]).size)
      ? false
      : keys_a.every((key: string) => this._equal(a[key], b[key], is_deep_equal));
  }

  private _has(container: any, target: Element, is_deep_has: boolean, is_deep_equal: boolean): boolean {
    return (typeof container !== 'object')
      ? false
      : (container instanceof Element)
        ? container.equal(target, is_deep_equal)
          ? true
          : !is_deep_has
            ? false
            : this._has_object(container.parameters, target, is_deep_has, is_deep_equal)
        : (container instanceof Array)
          ? this._has_array(container, target, is_deep_has, is_deep_equal)
          : this._has_object(container, target, is_deep_has, is_deep_equal);
  }

  private _has_array(container: any[], target: Element, is_deep_has: boolean, is_deep_equal: boolean): boolean {
    return container.some((value: any) => this._has(value, target, is_deep_has, is_deep_equal));
  }

  private _has_object(
      container: {[key: string]: any},
      target: Element,
      is_deep_has: boolean,
      is_deep_equal: boolean): boolean {
    return Object.keys(container).some((key: string) => this._has(container[key], target, is_deep_has, is_deep_equal));
  }

}
