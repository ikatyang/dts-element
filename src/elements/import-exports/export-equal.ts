import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {ImportExport} from '../import-export';

export interface IExportEqualRequiredParameters {
  value: Declaration;
}

// tslint:disable-next-line no-empty-interface
export interface IExportEqualOptionalParameters {}

export class ExportEqual extends ImportExport<IExportEqualRequiredParameters, IExportEqualOptionalParameters> {

  private _instance_of_export_equal: true;

  public get default_parameters(): IExportEqualOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value} = this.parameters;
    return `export = ${value.parameters.name};`;
  }

}
