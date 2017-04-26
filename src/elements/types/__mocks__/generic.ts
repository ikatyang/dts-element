export class GenericType {

  public parameters: any;

  constructor(parameters: any) {
    this.parameters = parameters;
  }

  public _emit(): string {
    return `[GenericType ${this.parameters.name}]`;
  }

}
