import {Container} from '../../collections';
import {emit_equal} from '../../helpers/emit-equal';
import {emit_extends} from '../../helpers/emit-extends';
import {InterfaceDeclaration} from '../declarations/interface-declaration';
import {Type} from '../type';

export interface IGenericTypeRequiredParameters {
  name: string;
}

export interface IGenericTypeOptionalParameters {
  extends: Type | null;
  default: Type | null;
}

export class GenericType extends Type<IGenericTypeRequiredParameters, IGenericTypeOptionalParameters> {

  public get default_parameters(): IGenericTypeOptionalParameters {
    return {
      extends: null,
      default: null,
    };
  }

  public _emit(container: Container): string {
    const {name} = this.parameters;
    const generic_extends = emit_extends(this.parameters.extends, container);
    const generic_default = emit_equal(this.parameters.default, container);
    return `${name}${generic_extends}${generic_default}`;
  }

}
