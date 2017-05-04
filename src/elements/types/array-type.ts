import {emit_brackets} from '../../helpers/emit-brackets';
import {Stack} from '../../stack';
import {Type} from '../type';

export interface IArrayTypeRequiredParameters {
  owned: Type;
}

// tslint:disable-next-line no-empty-interface
export interface IArrayTypeOptionalParameters {}

/**
 * ```ts
 * type X = some_type[];
 * //       ^^^^^^^^^^^
 * ```
 */
export class ArrayType extends Type<IArrayTypeRequiredParameters, IArrayTypeOptionalParameters> {

  private _instance_of_array_type: true;

  public get default_parameters(): IArrayTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const {owned} = this.parameters;
    return `${emit_brackets(owned.emit(stack), owned)}[]`;
  }

}
