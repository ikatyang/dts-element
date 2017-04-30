import {any_type} from '../constants';
import {Element} from '../element';
import {emit_constructor_keyword} from '../helpers/emit-constructor-keyword';
import {emit_constructor_return} from '../helpers/emit-constructor-return';
import {emit_jsdoc} from '../helpers/emit-jsdoc';
import {emit_parameters} from '../helpers/emit-parameters';
import {Stack} from '../stack';
import {Parameter} from './parameter';
import {Type} from './type';

export interface IConstructorRequiredParameters {
  parameters: Parameter[];
}

export interface IConstructorOptionalParameters {
  jsdoc: string;
  return: Type;
}

export class Constructor extends Element<IConstructorRequiredParameters, IConstructorOptionalParameters> {

  public get default_parameters(): IConstructorOptionalParameters {
    return {
      jsdoc: '',
      return: any_type,
    };
  }

  public _emit(stack: Stack): string {
    return `${this._emit_jsdoc()}${this._emit_raw(stack)}`;
  }

  public _emit_jsdoc(): string {
    return emit_jsdoc(this.parameters.jsdoc);
  }

  public _emit_raw(stack: Stack): string {
    const keyword = emit_constructor_keyword(stack);
    const parameters = emit_parameters(this.parameters.parameters, stack);
    const return_type = emit_constructor_return(this.parameters.return, stack);
    return `${keyword}(${parameters})${return_type};`;
  }

}
