import {any_type} from '../constants';
import {AnyElement, Element} from '../element';
import {emit_parameter_main} from '../helpers/emit-parameter-main';
import {AnyType} from './type';

export interface IParameterRequiredParameters {
  name: string;
}

export interface IParameterOptionalParameters {
  type: AnyType;
  flag: null | 'optional' | 'rest';
}

export class Parameter extends Element<IParameterRequiredParameters, IParameterOptionalParameters> {

  public get default_parameters(): IParameterOptionalParameters {
    return {
      type: any_type,
      flag: null,
    };
  }

  public _emit(_container: AnyElement | null): string {
    const {name, type, flag} = this.parameters;
    const main = emit_parameter_main(name, flag);
    return `${main}: ${type._emit(this)}`;
  }

}
