import {emit_as_name} from '../../helpers/emit-as-name';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Member} from '../member';

export interface IExportFromMemberRequiredParameters {
  owned: string;
}

export interface IExportFromMemberOptionalParameters {
  name: string | null;
}

/**
 * A wrapper for ExportFrom member
 */
export class ExportFromMember
    extends Member<IExportFromMemberRequiredParameters, IExportFromMemberOptionalParameters> {

  private _instance_of_export_from_member: true;

  public get default_parameters(): IExportFromMemberOptionalParameters {
    return {
      name: null,
    };
  }

  public _emit(_stack: Stack): string {
    const {owned} = this.parameters;
    return `${owned}${emit_as_name(this.parameters.name)}`;
  }

}
