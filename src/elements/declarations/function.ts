import {any_type} from '../../constants';
import {AnyElement} from '../../element';
import {emit_declare} from '../../helpers/emit-declare';
import {emit_function} from '../../helpers/emit-function';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_parameters} from '../../helpers/emit-parameters';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Parameter} from '../parameter';
import {AnyType} from '../type';
import {GenericType} from '../types/generic';

// tslint:disable-next-line no-empty-interface
export interface IFunctionDeclarationRequiredParameters {}

export interface IFunctionDeclarationOptionalParameters {
  parameters: Parameter[];
  generics: GenericType[];
  return: AnyType;
}

export class FunctionDeclaration
    extends Declaration<IFunctionDeclarationRequiredParameters, IFunctionDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IFunctionDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      parameters: [],
      generics: [],
      return: any_type,
    });
  }

  public _emit(container: AnyElement | null): string {
    const {name} = this.parameters;
    const parameters = emit_parameters(this.parameters.parameters, this);
    const generics = emit_generics(this.parameters.generics, this);
    const return_type = this.parameters.return._emit(this);
    const declare = emit_declare(container);
    const func = emit_function(container);
    return `${declare}${func}${name}${generics}(${parameters}): ${return_type};`;
  }

}
