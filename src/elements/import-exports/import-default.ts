import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {ImportExport} from '../import-export';

export interface IImportDefaultRequiredParameters {
  value: Declaration;
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IImportDefaultOptionalParameters {}

/**
 * ```ts
 * import some_declaration from "path/to/some";
 * ```
 */
export class ImportDefault extends ImportExport<IImportDefaultRequiredParameters, IImportDefaultOptionalParameters> {

  private _instance_of_import_default: true;

  public get default_parameters(): IImportDefaultOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value, from} = this.parameters;
    return `import ${value.parameters.name} from ${JSON.stringify(from)};`;
  }

}
