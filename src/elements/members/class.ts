import {Container} from '../../collections';
import {emit_abstract} from '../../helpers/emit-abstract';
import {emit_accessor} from '../../helpers/emit-accessor';
import {emit_readonly} from '../../helpers/emit-readonly';
import {emit_static} from '../../helpers/emit-static';
import {Member} from '../member';

export type ClassAccessor = 'private' | 'protected' | 'public' | null;

// tslint:disable-next-line no-empty-interface
export interface IClassMemberRequiredParameters {}

export interface IClassMemberOptionalParameters {
  accessor: ClassAccessor;
  abstract: boolean;
  readonly: boolean;
  static: boolean;
}

export class ClassMember extends Member<IClassMemberRequiredParameters, IClassMemberOptionalParameters> {

  public get default_parameters(): IClassMemberOptionalParameters {
    return {
      accessor: null,
      abstract: false,
      readonly: false,
      static: false,
    };
  }

  public _emit(_container: Container): string {
    const {owned} = this.parameters;
    const accessor = emit_accessor(this.parameters.accessor, owned);
    const readonly = emit_readonly(this.parameters.readonly, owned);
    const abstract = emit_abstract(this.parameters.abstract, owned);
    const a_static = emit_static(this.parameters.static, owned);
    return `${owned._emit_jsdoc()}${accessor}${a_static}${abstract}${readonly}${owned._emit_raw(this)}`;
  }

}
