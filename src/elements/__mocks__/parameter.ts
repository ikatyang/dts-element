export class Parameter {

  public parameters: any;

  constructor(parameters: any) {
    this.parameters = parameters;
  }

  public _emit(): string {
    return `[Parameter ${this.parameters.name}]`;
  }

}
