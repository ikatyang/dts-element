import {emit_name_as} from '../../helpers/emit-name-as';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Member} from '../member';

export interface IImportMemberRequiredParameters {
  owned: Declaration;
}

export interface IImportMemberOptionalParameters {
  name: string | null;
}

export class ImportMember
    extends Member<IImportMemberRequiredParameters, IImportMemberOptionalParameters> {

  public get default_parameters(): IImportMemberOptionalParameters {
    return {
      name: null,
    };
  }

  public _emit(_stack: Stack): string {
    const {owned} = this.parameters;
    return `${emit_name_as(this.parameters.name)}${owned.parameters.name}`;
  }

}
