import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {ImportExport} from '../import-export';

export interface IImportDefaultRequiredParameters {
  value: Declaration;
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IImportDefaultOptionalParameters {}

export class ImportDefault extends ImportExport<IImportDefaultRequiredParameters, IImportDefaultOptionalParameters> {

  public get default_parameters(): IImportDefaultOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value, from} = this.parameters;
    return `import ${value.parameters.name} from ${JSON.stringify(from)};`;
  }

}
