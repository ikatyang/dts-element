import {emit_readonly} from '../../helpers/emit-readonly';
import {Stack} from '../../stack';
import {Constructor} from '../constructor';
import {FunctionDeclaration} from '../declarations/function-declaration';
import {VariableDeclaration} from '../declarations/variable-declaration';
import {IndexSignature} from '../index-signature';
import {Member} from '../member';

export interface IObjectMemberRequiredParameters {
  owned: ObjectMemberOwned;
}

export interface IObjectMemberOptionalParameters {
  readonly: boolean;
}

export type ObjectMemberOwned = Constructor | IndexSignature | VariableDeclaration | FunctionDeclaration;

export class ObjectMember extends Member<IObjectMemberRequiredParameters, IObjectMemberOptionalParameters> {

  private _instance_of_object_member: true;

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
