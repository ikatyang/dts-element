import {Element} from '../element';
import {emit_jsdoc} from '../helpers/emit-jsdoc';
import {Stack} from '../stack';

export interface IDeclarationRequiredParameters {
  name: string | null;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string;
}

export abstract class Declaration
    <RequiredParameters extends object = any, OptionalParameters extends object = any> extends Element
    <IDeclarationRequiredParameters & RequiredParameters, IDeclarationOptionalParameters & OptionalParameters> {

  public get default_declaration_parameters(): IDeclarationOptionalParameters {
    return {
      jsdoc: '',
    };
  }

  public _emit(stack: Stack): string {
    return `${this._emit_jsdoc()}${this._emit_raw(stack)}`;
  }

  public _emit_jsdoc(): string {
    return emit_jsdoc(this.parameters.jsdoc);
  }

  public abstract _emit_raw(stack: Stack): string;

}
