import {emit_declare} from '../../helpers/emit-declare';
import {emit_enum_members} from '../../helpers/emit-enum-members';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {EnumMember} from '../members/enum-member';

export interface IEnumDeclarationRequiredParameters {
  name: string;
}

export interface IEnumDeclarationOptionalParameters {
  members: EnumMember[];
}

export class EnumDeclaration
    extends Declaration<IEnumDeclarationRequiredParameters, IEnumDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IEnumDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      members: [],
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name, members} = this.parameters;
    const declare = emit_declare(stack);
    return `${declare}enum ${name} ${emit_enum_members(members, stack)}`;
  }

}
