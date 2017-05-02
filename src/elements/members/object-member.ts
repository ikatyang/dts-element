import {emit_readonly} from '../../helpers/emit-readonly';
import {Stack} from '../../stack';
import {Member, MemberOwned} from '../member';

export interface IObjectMemberRequiredParameters {
  owned: MemberOwned;
}

export interface IObjectMemberOptionalParameters {
  readonly: boolean;
}

export class ObjectMember extends Member<IObjectMemberRequiredParameters, IObjectMemberOptionalParameters> {

  public get default_parameters(): IObjectMemberOptionalParameters {
    return {
      readonly: false,
    };
  }

  public _emit(stack: Stack): string {
    const {owned} = this.parameters;
    const readonly = emit_readonly(this.parameters.readonly, owned);
    return `${owned._emit_jsdoc()}${readonly}${owned._emit_raw(stack.push(owned))}`;
  }

}
