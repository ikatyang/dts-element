import {Stack} from '../../stack';
import {ImportExport} from '../import-export';

export interface IImportAllRequiredParameters {
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IImportAllOptionalParameters {}

export class ImportAll extends ImportExport<IImportAllRequiredParameters, IImportAllOptionalParameters> {

  public get default_parameters(): IImportAllOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {from} = this.parameters;
    return `import ${JSON.stringify(from)};`;
  }

}
