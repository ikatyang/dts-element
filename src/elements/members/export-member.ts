import {emit_named_as} from '../../helpers/emit-named-as';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Member} from '../member';

export interface IExportMemberRequiredParameters {
  owned: Declaration;
}

export interface IExportMemberOptionalParameters {
  name: string | null;
}

export class ExportMember
    extends Member<IExportMemberRequiredParameters, IExportMemberOptionalParameters> {

  public get default_parameters(): IExportMemberOptionalParameters {
    return {
      name: null,
    };
  }

  public _emit(_stack: Stack): string {
    const {owned} = this.parameters;
    return `${owned.parameters.name}${emit_named_as(this.parameters.name)}`;
  }

}
