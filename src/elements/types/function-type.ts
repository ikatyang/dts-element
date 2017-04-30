import {any_type} from '../../constants';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_parameters} from '../../helpers/emit-parameters';
import {Stack} from '../../stack';
import {Parameter} from '../parameter';
import {Type} from '../type';
import {GenericType} from './generic-type';

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

  public _emit(stack: Stack): string {
    const generics = emit_generics(this.parameters.generics, stack);
    const parameters = emit_parameters(this.parameters.parameters, stack);
    const return_type = this.parameters.return.emit(stack);
    return `${generics}(${parameters}) => ${return_type}`;
  }

}
