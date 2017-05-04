import {Stack} from '../../stack';
import {Type} from '../type';

export interface IBasicTypeRequiredParameters {
  name: string;
}

// tslint:disable-next-line no-empty-interface
export interface IBasicTypeOptionalParameters {}

/**
 * ```ts
 * type X = some_basic_type_name;
 * //       ^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export class BasicType extends Type<IBasicTypeRequiredParameters, IBasicTypeOptionalParameters> {

  private _instance_of_basic_type: true;

  public get default_parameters(): IBasicTypeOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    return this.parameters.name;
  }

}
