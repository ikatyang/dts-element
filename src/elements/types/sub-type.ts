import {any_type} from '../../constants';
import {emit_elements} from '../../helpers/emit-elements';
import {Stack} from '../../stack';
import {Type} from '../type';

export interface ISubTypeRequiredParameters {
  target: Type;
}

export interface ISubTypeOptionalParameters {
  path: Type[];
}

export class SubType extends Type<ISubTypeRequiredParameters, ISubTypeOptionalParameters> {

  public get default_parameters(): ISubTypeOptionalParameters {
    return {
      path: [any_type],
    };
  }

  public _emit(stack: Stack): string {
    const {path} = this.parameters;
    const target = this.parameters.target.emit(stack);
    return `(${target})[${emit_elements(path, stack, '][')}]`;
  }

}
