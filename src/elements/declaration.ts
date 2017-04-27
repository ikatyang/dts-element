import {AnyElement, Element} from '../element';
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

  public _emit(container: AnyElement | null): string {
    const jsdoc = emit_jsdoc(this.parameters.jsdoc);
    return `${jsdoc}${this._emit_raw(container)}`;
  }

  public abstract _emit_raw(container: AnyElement | null): string;

}
