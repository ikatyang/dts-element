import {jsdocify} from '.././helpers/jsdocify';
import {Element} from '../element';

export interface IDeclarationRequiredParameters {
  name: string;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string;
}

export type AnyDeclaration = Declaration<any, any>;

export abstract class Declaration<RequiredParameters extends {}, OptionalParameters extends {}> extends Element
    <IDeclarationRequiredParameters & RequiredParameters, IDeclarationOptionalParameters & OptionalParameters> {

  public get default_declaration_parameters(): IDeclarationOptionalParameters {
    return {
      jsdoc: '',
    };
  }

  public get jsdoc(): string {
    const jsdoc = jsdocify(this.parameters.jsdoc);
    return (jsdoc.length === 0)
      ? jsdoc
      : `${jsdoc}\n`;
  }

}
