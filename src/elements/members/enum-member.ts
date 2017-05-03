import {emit_declaration_name} from '../../helpers/emit-declaration-name';
import {emit_equal} from '../../helpers/emit-equal';
import {Stack} from '../../stack';
import {VariableDeclaration} from '../declarations/variable-declaration';
import {Member} from '../member';

export interface IEnumMemberRequiredParameters {
  owned: VariableDeclaration;
}

export interface IEnumMemberOptionalParameters {
  value: number | null;
}

export class EnumMember extends Member<IEnumMemberRequiredParameters, IEnumMemberOptionalParameters> {

  private _instance_of_enum_member: true;

  public get default_parameters(): IEnumMemberOptionalParameters {
    return {
      value: null,
    };
  }

  public _emit(stack: Stack, fn: (value: number | null) => number): string {
    const {owned} = this.parameters;
    const value = fn(this.parameters.value);
    return `${owned._emit_jsdoc()}${emit_declaration_name(owned.parameters.name, stack)}${emit_equal(value, stack)}`;
  }

}
