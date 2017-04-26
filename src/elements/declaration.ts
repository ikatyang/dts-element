import {Element} from '../element';
import {emit_jsdoc} from '../helpers/emit-jsdoc';

export interface IDeclarationRequiredParameters {
  name: string;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string;
}

export type AnyDeclaration = Declaration<any, any>;

export abstract class Declaration<RequiredParameters extends {}, OptionalParameters extends {}> extends Element
    <IDeclarationRequiredParameters & RequiredParameters, IDeclarationOptionalParameters & OptionalParameters> {

  // istanbul ignore next
  public get default_declaration_parameters(): IDeclarationOptionalParameters {
    return {
      jsdoc: '',
    };
  }

  public get jsdoc(): string {
    const jsdoc = emit_jsdoc(this.parameters.jsdoc);
    return (jsdoc.length === 0)
      ? jsdoc
      : `${jsdoc}\n`;
  }

}
