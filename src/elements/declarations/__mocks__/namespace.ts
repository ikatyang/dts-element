export class NamespaceDeclaration {

  public parameters: any;

  constructor(parameters: any) {
    this.parameters = parameters;
  }

  public _emit(): string {
    return `[NamespaceDeclaration ${this.parameters.name}]`;
  }

}
