export abstract class Element<Parameters extends {}> {

  public parameters: Parameters;

  constructor(parameters: Parameters) {
    this.parameters = parameters;
  }

  public get<Key extends keyof Parameters>(key: Key): Parameters[Key] {
    return this.parameters[key];
  }

  public set(values: Partial<Parameters>): this {
    Object.keys(values).forEach((key: keyof Parameters) => {
      const value = values[key];
      if (value !== undefined) {
        this.parameters[key] = value;
      }
    });
    return this;
  }

  public clone(is_deep_clone: boolean = false): this {
    const element = Object.create(this.constructor.prototype);
    element.parameters = {};
    element.copy(this, is_deep_clone);
    return element;
  }

  public copy(element: this, is_deep_copy: boolean = false): this {
    this.parameters = this._clone_parameters(element.parameters, is_deep_copy);
    return this;
  }

  private _clone_parameters(parameters: Parameters, is_deep_clone: boolean): Parameters {
    return Object.keys(parameters).reduce((cloned_parameters: Partial<Parameters>, key: keyof Parameters) => {
      const value = parameters[key];
      const cloned_value = this._clone_value(value, is_deep_clone);
      cloned_parameters[key] = cloned_value;
      return cloned_parameters;
    }, {} as any);
  }

  private _clone_value<T>(value: T, is_deep_clone: boolean): T {
    return (typeof value !== 'object')
      ? value
      : (value instanceof Element)
        ? value.clone(is_deep_clone)
        : (value instanceof Array)
          ? value.map(<U>(x: U): U => this._clone_value(x, is_deep_clone)) as any
          : value; // TODO
  }

}
