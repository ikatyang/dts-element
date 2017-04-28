import {ParameterFlag} from '../collections';
import {any_type} from '../constants';
import {AnyElement, Element} from '../element';
import {emit_parameter_main} from '../helpers/emit-parameter-main';
import {emit_parameter_type} from '../helpers/emit-parameter-type';
import {AnyType} from './type';

export interface IParameterRequiredParameters {
  name: string;
}

export interface IParameterOptionalParameters {
  type: AnyType;
  flag: ParameterFlag;
}

export class Parameter extends Element<IParameterRequiredParameters, IParameterOptionalParameters> {

  public get default_parameters(): IParameterOptionalParameters {
    return {
      type: any_type,
      flag: null,
    };
  }

  public _emit(container: AnyElement | null): string {
    const {name, type, flag} = this.parameters;
    return `${emit_parameter_main(name, flag)}: ${emit_parameter_type(type, flag, container)}`;
  }

}
