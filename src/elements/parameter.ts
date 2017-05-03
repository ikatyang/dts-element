import {any_type, ParameterFlags} from '../constants';
import {Element} from '../element';
import {emit_parameter_main} from '../helpers/emit-parameter-main';
import {emit_parameter_type} from '../helpers/emit-parameter-type';
import {Stack} from '../stack';
import {Type} from './type';

export interface IParameterRequiredParameters {
  name: string;
}

export interface IParameterOptionalParameters {
  type: Type;
  flag: ParameterFlags;
}

export class Parameter extends Element<IParameterRequiredParameters, IParameterOptionalParameters> {

  private _instance_of_parameter: true;

  public get default_parameters(): IParameterOptionalParameters {
    return {
      type: any_type,
      flag: ParameterFlags.NONE,
    };
  }

  public _emit(stack: Stack): string {
    const {name, type, flag} = this.parameters;
    return `${emit_parameter_main(name, flag)}: ${emit_parameter_type(type, flag, stack)}`;
  }

}
