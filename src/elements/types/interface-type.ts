import {Container} from '../../collections';
import {emit_declaration_type_name} from '../../helpers/emit-declaration-type-name';
import {emit_generics} from '../../helpers/emit-generics';
import {InterfaceDeclaration} from '../declarations/interface-declaration';
import {Type} from '../type';

export interface IInterfaceTypeRequiredParameters {
  owned: string | InterfaceDeclaration;
}

export interface IInterfaceTypeOptionalParameters {
  generics: Type[];
}

export class InterfaceType extends Type<IInterfaceTypeRequiredParameters, IInterfaceTypeOptionalParameters> {

  public get default_parameters(): IInterfaceTypeOptionalParameters {
    return {
      generics: [],
    };
  }

  public _emit(_container: Container): string {
    const name = emit_declaration_type_name(this.parameters.owned);
    return `${name}${emit_generics(this.parameters.generics, this)}`;
  }

}
