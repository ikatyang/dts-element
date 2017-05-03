import {emit_declare} from '../../helpers/emit-declare';
import {emit_enum_members} from '../../helpers/emit-enum-members';
import {emit_export} from '../../helpers/emit-export';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {EnumMember} from '../members/enum-member';

export interface IEnumDeclarationRequiredParameters {
  name: string;
}

export interface IEnumDeclarationOptionalParameters {
  members: EnumMember[];
  export: boolean;
}

export class EnumDeclaration
    extends Declaration<IEnumDeclarationRequiredParameters, IEnumDeclarationOptionalParameters> {

  private _instance_of_enum_declaration: true;

  public get default_parameters(): IDeclarationOptionalParameters & IEnumDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      members: [],
      export: false,
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name, members} = this.parameters;
    const declare = emit_declare(stack);
    const an_export = emit_export(this.parameters.export, stack);
    return `${an_export}${declare}enum ${name} ${emit_enum_members(members, stack)}`;
  }

}
