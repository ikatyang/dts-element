import {emit_equal} from '../../helpers/emit-equal';
import {emit_extends} from '../../helpers/emit-extends';
import {Stack} from '../../stack';
import {InterfaceDeclaration} from '../declarations/interface-declaration';
import {Type} from '../type';

export interface IGenericTypeRequiredParameters {
  name: string;
}

export interface IGenericTypeOptionalParameters {
  extends: Type | null;
  default: Type | null;
}

/**
 * ```ts
 * type X<T extends string> = T;
 * //     ^^^^^^^^^^^^^^^^    ^
 * ```
 */
export class GenericType extends Type<IGenericTypeRequiredParameters, IGenericTypeOptionalParameters> {

  private _instance_of_generic_type: true;

  public get default_parameters(): IGenericTypeOptionalParameters {
    return {
      extends: null,
      default: null,
    };
  }

  public _emit(stack: Stack): string {
    const {name} = this.parameters;
    const generic_extends = emit_extends(this.parameters.extends, stack);
    const generic_default = emit_equal(this.parameters.default, stack);
    return `${name}${generic_extends}${generic_default}`;
  }

}
