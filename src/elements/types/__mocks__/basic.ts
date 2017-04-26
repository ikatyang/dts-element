export class BasicType {

  public parameters: any;

  constructor(parameters: any) {
    this.parameters = parameters;
  }

  public _emit(): string {
    return `[BasicType ${this.parameters.name}]`;
  }

}
