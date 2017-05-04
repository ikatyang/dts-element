import {emit_declaration_type_name} from '../../helpers/emit-declaration-type-name';
import {emit_generics} from '../../helpers/emit-generics';
import {Stack} from '../../stack';
import {InterfaceDeclaration} from '../declarations/interface-declaration';
import {Type} from '../type';

export interface IInterfaceTypeRequiredParameters {
  owned: string | InterfaceDeclaration;
}

export interface IInterfaceTypeOptionalParameters {
  generics: Type[];
}

/**
 * ```ts
 * type X = some_interface_declaration<some_generic>;
 * //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export class InterfaceType extends Type<IInterfaceTypeRequiredParameters, IInterfaceTypeOptionalParameters> {

  private _instance_of_interface_type: true;

  public get default_parameters(): IInterfaceTypeOptionalParameters {
    return {
      generics: [],
    };
  }

  public _emit(stack: Stack): string {
    const name = emit_declaration_type_name(this.parameters.owned);
    return `${name}${emit_generics(this.parameters.generics, stack)}`;
  }

}
