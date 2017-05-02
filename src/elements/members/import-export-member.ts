import {emit_named_as} from '../../helpers/emit-named-as';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Member} from '../member';

export interface IImportExportMemberRequiredParameters {
  owned: Declaration;
}

export interface IImportExportMemberOptionalParameters {
  name: string | null;
}

export class ImportExportMember
    extends Member<IImportExportMemberRequiredParameters, IImportExportMemberOptionalParameters> {

  public get default_parameters(): IImportExportMemberOptionalParameters {
    return {
      name: null,
    };
  }

  public _emit(_stack: Stack): string {
    const {owned} = this.parameters;
    return `${owned.parameters.name}${emit_named_as(this.parameters.name)}`;
  }

}
