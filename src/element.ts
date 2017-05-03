import {Stack} from './stack';

export interface IElementConstructor {
  new(parameters: object): Element;
}

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
    return Object.keys(object).reduce((cloned_object: T, key: keyof T) => {
      const value = object[key];
      cloned_object[key] = this._clone_sub_value(value, is_deep_clone);
      return cloned_object;
    }, {} as T);
  }

  private _clone_sub_value<T>(sub_value: T, is_deep_clone: boolean): T {
    return !is_deep_clone
      ? sub_value
      : this._clone(sub_value, is_deep_clone);
  }

}
