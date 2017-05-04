import {emit_as_name} from '../../helpers/emit-as-name';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Member} from '../member';

export interface IExportMemberRequiredParameters {
  owned: Declaration;
}

export interface IExportMemberOptionalParameters {
  name: string | null;
}

/**
 * A wrapper for ExportNamed member
 */
export class ExportMember
    extends Member<IExportMemberRequiredParameters, IExportMemberOptionalParameters> {

  private _instance_of_export_member: true;

  public get default_parameters(): IExportMemberOptionalParameters {
    return {
      name: null,
    };
  }

  public _emit(_stack: Stack): string {
    const {owned} = this.parameters;
    return `${owned.parameters.name}${emit_as_name(this.parameters.name)}`;
  }

}
