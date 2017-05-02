import {any_type} from '../constants';
import {Element} from '../element';
import {Stack} from '../stack';
import {Parameter} from './parameter';
import {Type} from './type';

export interface ITypeAssertionRequiredParameters {
  parameter: Parameter;
}

export interface ITypeAssertionOptionalParameters {
  type: Type;
}

export class TypeAssertion
    extends Element<ITypeAssertionRequiredParameters, ITypeAssertionOptionalParameters> {

  public get default_parameters(): ITypeAssertionOptionalParameters {
    return {
      type: any_type,
    };
  }

  public _emit(stack: Stack): string {
    const {parameter, type} = this.parameters;
    return `${parameter.parameters.name} is ${type.emit(stack)}`;
  }

}
