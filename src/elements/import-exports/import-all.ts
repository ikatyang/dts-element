import {Stack} from '../../stack';
import {ImportExport} from '../import-export';

export interface IImportAllRequiredParameters {
  from: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IImportAllOptionalParameters {}

/**
 * ```ts
 * import "path/to/some";
 * ```
 */
export class ImportAll extends ImportExport<IImportAllRequiredParameters, IImportAllOptionalParameters> {

  private _instance_of_import_all: true;

  public get default_parameters(): IImportAllOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {from} = this.parameters;
    return `import ${JSON.stringify(from)};`;
  }

}
