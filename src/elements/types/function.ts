import {Container} from '../../collections';
import {any_type} from '../../constants';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_parameters} from '../../helpers/emit-parameters';
import {Parameter} from '../parameter';
import {Type} from '../type';
import {GenericType} from './generic';

export interface IFunctionTypeRequiredParameters {
  parameters: Parameter[];
}

export interface IFunctionTypeOptionalParameters {
  generics: GenericType[];
  return: Type;
}

export class FunctionType extends Type<IFunctionTypeRequiredParameters, IFunctionTypeOptionalParameters> {

  public get default_parameters(): IFunctionTypeOptionalParameters {
    return {
      generics: [],
      return: any_type,
    };
  }

  public _emit(_container: Container): string {
    const generics = emit_generics(this.parameters.generics, this);
    const parameters = emit_parameters(this.parameters.parameters, this);
    const return_type = this.parameters.return._emit(this);
    return `${generics}(${parameters}) => ${return_type}`;
  }

}
