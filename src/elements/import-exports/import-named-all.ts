import {Stack} from '../../stack';
import {NamespaceDeclaration} from '../declarations/namespace-declaration';
import {ImportExport} from '../import-export';

export interface IImportNamedAllRequiredParameters {
  value: NamespaceDeclaration;
  from: string;
}

// tslint:disable-next-line no-empty-interface
export interface IImportNamedAllOptionalParameters {}

/**
 * ```ts
 * import * as some_namespace_declaration from "path/to/some";
 * ```
 */
export class ImportNamedAll extends ImportExport<IImportNamedAllRequiredParameters, IImportNamedAllOptionalParameters> {

  private _instance_of_import_named_all: true;

  public get default_parameters(): IImportNamedAllOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value, from} = this.parameters;
    return `import * as ${value.parameters.name} from ${JSON.stringify(from)};`;
  }

}
