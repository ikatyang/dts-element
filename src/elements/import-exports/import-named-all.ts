import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {ImportExport} from '../import-export';

export interface IImportNamedAllRequiredParameters {
  value: Declaration;
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IImportNamedAllOptionalParameters {}

export class ImportNamedAll extends ImportExport<IImportNamedAllRequiredParameters, IImportNamedAllOptionalParameters> {

  public get default_parameters(): IImportNamedAllOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value, from} = this.parameters;
    return `import * as ${value.parameters.name} from ${JSON.stringify(from)};`;
  }

}
