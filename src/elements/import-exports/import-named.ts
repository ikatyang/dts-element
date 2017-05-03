import {emit_elements} from '../../helpers/emit-elements';
import {Stack} from '../../stack';
import {ImportExport} from '../import-export';
import {ImportMember} from '../members/import-member';

export interface IImportNamedRequiredParameters {
  members: ImportMember[];
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IImportNamedOptionalParameters {}

export class ImportNamed extends ImportExport<IImportNamedRequiredParameters, IImportNamedOptionalParameters> {

  private _instance_of_import_named: true;

  public get default_parameters(): IImportNamedOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const {members, from} = this.parameters;
    return `import {${emit_elements(members, stack, ', ')}} from ${JSON.stringify(from)};`;
  }

}
