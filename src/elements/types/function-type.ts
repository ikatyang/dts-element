import {emit_generics} from '../../helpers/emit-generics';
import {emit_parameters} from '../../helpers/emit-parameters';
import {Stack} from '../../stack';
import {Parameter} from '../parameter';
import {Type} from '../type';
import {TypeAssertion} from '../type-assertion';
import {GenericType} from './generic-type';

export interface IFunctionTypeRequiredParameters {
  return: Type | TypeAssertion;
}

export interface IFunctionTypeOptionalParameters {
  generics: GenericType[];
  parameters: Parameter[];
}

export class FunctionType extends Type<IFunctionTypeRequiredParameters, IFunctionTypeOptionalParameters> {

  private _instance_of_function_type: true;

  public get default_parameters(): IFunctionTypeOptionalParameters {
    return {
      generics: [],
      parameters: [],
    };
  }

  public _emit(stack: Stack): string {
    const generics = emit_generics(this.parameters.generics, stack, true);
    const parameters = emit_parameters(this.parameters.parameters, stack);
    const return_type = this.parameters.return.emit(stack);
    return `${generics}(${parameters}) => ${return_type}`;
  }

}
