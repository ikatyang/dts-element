import {Stack} from '../../stack';
import {ImportExport} from '../import-export';

export interface IExportAllRequiredParameters {
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IExportAllOptionalParameters {}

export class ExportAll extends ImportExport<IExportAllRequiredParameters, IExportAllOptionalParameters> {

  public get default_parameters(): IExportAllOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {from} = this.parameters;
    return `export * from ${JSON.stringify(from)};`;
  }

}
