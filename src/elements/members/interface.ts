import {AnyElement} from '../../element';
import {emit_readonly} from '../../helpers/emit-readonly';
import {Member} from '../member';

// tslint:disable-next-line no-empty-interface
export interface IInterfaceMemberRequiredParameters {}

export interface IInterfaceMemberOptionalParameters {
  readonly: boolean;
}

export class InterfaceMember extends Member<IInterfaceMemberRequiredParameters, IInterfaceMemberOptionalParameters> {

  public get default_parameters(): IInterfaceMemberOptionalParameters {
    return {
      readonly: false,
    };
  }

  public _emit(_container: AnyElement | null): string {
    const {owned} = this.parameters;
    const readonly = emit_readonly(this.parameters.readonly, owned);
    return `${owned._emit_jsdoc()}${readonly}${owned._emit_raw(this)}`;
  }

}
