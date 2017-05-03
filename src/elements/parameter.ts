import {any_type, ParameterKind} from '../constants';
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
  kind: ParameterKind;
}

export class Parameter extends Element<IParameterRequiredParameters, IParameterOptionalParameters> {

  private _instance_of_parameter: true;

  public get default_parameters(): IParameterOptionalParameters {
    return {
      type: any_type,
      kind: ParameterKind.NONE,
    };
  }

  public _emit(stack: Stack): string {
    const {name, type, kind} = this.parameters;
    return `${emit_parameter_main(name, kind)}: ${emit_parameter_type(type, kind, stack)}`;
  }

}
