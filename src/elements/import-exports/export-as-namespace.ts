import {Stack} from '../../stack';
import {ImportExport} from '../import-export';

export interface IExportAsNamespaceRequiredParameters {
  name: string;
}

// tslint:disable-next-line no-empty-interface
export interface IExportAsNamespaceOptionalParameters {}

export class ExportAsNamespace
    extends ImportExport<IExportAsNamespaceRequiredParameters, IExportAsNamespaceOptionalParameters> {

  public get default_parameters(): IExportAsNamespaceOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {name} = this.parameters;
    return `export as namespace ${name};`;
  }

}
