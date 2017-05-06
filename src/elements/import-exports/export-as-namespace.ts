import {Stack} from '../../stack';
import {ImportExport} from '../import-export';

export interface IExportAsNamespaceRequiredParameters {
  name: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IExportAsNamespaceOptionalParameters {}

/**
 * ```ts
 * export as namespace some_namespace_name;
 * ```
 */
export class ExportAsNamespace
    extends ImportExport<IExportAsNamespaceRequiredParameters, IExportAsNamespaceOptionalParameters> {

  private _instance_of_export_as_namespace: true;

  public get default_parameters(): IExportAsNamespaceOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {name} = this.parameters;
    return `export as namespace ${name};`;
  }

}
