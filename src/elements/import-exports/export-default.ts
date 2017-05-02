import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {ImportExport} from '../import-export';

export interface IExportDefaultRequiredParameters {
  value: Declaration;
}

// tslint:disable-next-line no-empty-interface
export interface IExportDefaultOptionalParameters {}

export class ExportDefault extends ImportExport<IExportDefaultRequiredParameters, IExportDefaultOptionalParameters> {

  public get default_parameters(): IExportDefaultOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value} = this.parameters;
    return `export default ${value.parameters.name};`;
  }

}