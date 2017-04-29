import {Container} from '../../collections';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_members} from '../../helpers/emit-members';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {ObjectMember} from '../members/object';
import {GenericType} from '../types/generic';

export interface IInterfaceDeclarationRequiredParameters {
  name: string;
}

export interface IInterfaceDeclarationOptionalParameters {
  generics: GenericType[];
  members: ObjectMember[];
}

export class InterfaceDeclaration
    extends Declaration<IInterfaceDeclarationRequiredParameters, IInterfaceDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IInterfaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      members: [],
    });
  }

  public _emit_raw(container: Container): string {
    const {name, members, generics} = this.parameters;
    const generic = emit_generics(generics, this);
    return `interface ${name}${generic} ${emit_members(members, this)}`;
  }

}
