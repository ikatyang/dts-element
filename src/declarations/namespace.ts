import { Declaration, IDeclarationOptionalParameters } from '../declaration';
import { indent } from '../helpers/indent';

export interface INamespaceOptionalParameters {
  declarations: Declaration<any, any>[];
}

export class Namespace extends Declaration<{}, INamespaceOptionalParameters> {

  public emit(): string {
    const jsdoc = this.emit_jsdoc();
    const { name, declarations } = this.parameters;
    const content = declarations
      .map((declaration: Declaration<any, any>) => declaration.emit())
      .join('\n');
    return `${jsdoc}declare namespace ${name} {\n${indent(content)}}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      declarations: [],
    });
  }

}
