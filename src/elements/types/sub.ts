import {Container} from '../../collections';
import {any_type} from '../../constants';
import {emit_elements} from '../../helpers/emit-elements';
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

  public _emit(_container: Container): string {
    const {path} = this.parameters;
    const target = this.parameters.target._emit(this);
    return `(${target})[${emit_elements(path, this, '][')}]`;
  }

}
