import {emit_elements} from '../../helpers/emit-elements';
import {Stack} from '../../stack';
import {ImportExport} from '../import-export';
import {ExportMember} from '../members/export-member';

export interface IExportNamedRequiredParameters {
  members: ExportMember[];
}

// tslint:disable-next-line no-empty-interface
export interface IExportNamedOptionalParameters {}

export class ExportNamed extends ImportExport<IExportNamedRequiredParameters, IExportNamedOptionalParameters> {

  private _instance_of_export_named: true;

  public get default_parameters(): IExportNamedOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const {members} = this.parameters;
    return `export {${emit_elements(members, stack, ', ')}};`;
  }

}
