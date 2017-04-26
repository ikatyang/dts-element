export class VariableDeclaration {

  public parameters: any;

  constructor(parameters: any) {
    this.parameters = parameters;
  }

  public _emit(): string {
    return `[VariableDeclaration ${this.parameters.name}]`;
  }

}
