import {ClassAccessor} from '../../constants';
import {emit_abstract} from '../../helpers/emit-abstract';
import {emit_accessor} from '../../helpers/emit-accessor';
import {emit_readonly} from '../../helpers/emit-readonly';
import {emit_static} from '../../helpers/emit-static';
import {Stack} from '../../stack';
import {Member, MemberOwned} from '../member';

export interface IClassMemberRequiredParameters {
  owned: MemberOwned;
}

export interface IClassMemberOptionalParameters {
  accessor: ClassAccessor;
  abstract: boolean;
  readonly: boolean;
  static: boolean;
}

export class ClassMember extends Member<IClassMemberRequiredParameters, IClassMemberOptionalParameters> {

  private _instance_of_class_member: true;

  public get default_parameters(): IClassMemberOptionalParameters {
    return {
      accessor: ClassAccessor.NONE,
      abstract: false,
      readonly: false,
      static: false,
    };
  }

  public _emit(stack: Stack): string {
    const {owned} = this.parameters;
    const accessor = emit_accessor(this.parameters.accessor, owned);
    const readonly = emit_readonly(this.parameters.readonly, owned);
    const abstract = emit_abstract(this.parameters.abstract, owned);
    const a_static = emit_static(this.parameters.static, owned);
    return `${owned._emit_jsdoc()}${accessor}${a_static}${abstract}${readonly}${owned._emit_raw(stack.push(owned))}`;
  }

}
