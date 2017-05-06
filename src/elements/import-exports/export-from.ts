import {Stack} from '../../stack';
import {emit_elements} from '.././../helpers/emit-elements';
import {ImportExport} from '../import-export';
import {ExportFromMember} from '../members/export-from-member';

export interface IExportFromRequiredParameters {
  from: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IExportFromOptionalParameters {
  members: ExportFromMember[];
}

/**
 * ```ts
 * export { some_name } from "path/to/some";
 * ```
 */
export class ExportFrom extends ImportExport<IExportFromRequiredParameters, IExportFromOptionalParameters> {

  private _instance_of_export_from: true;

  public get default_parameters(): IExportFromOptionalParameters {
    return {
      members: [],
    };
  }

  public _emit(stack: Stack): string {
    const {from, members} = this.parameters;
    return `export {${emit_elements(members, stack, ', ')}} from ${JSON.stringify(from)};`;
  }

}
