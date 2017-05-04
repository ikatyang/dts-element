import {emit_elements} from '../../helpers/emit-elements';
import {Stack} from '../../stack';
import {Type} from '../type';

export interface ITupleTypeRequiredParameters {
  types: Type[];
}

// tslint:disable-next-line no-empty-interface
export interface ITupleTypeOptionalParameters {}

/**
 * ```ts
 * type X = [some_type_1, some_type_2];
 * //       ^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export class TupleType extends Type<ITupleTypeRequiredParameters, ITupleTypeOptionalParameters> {

  private _instance_of_tuple_type: true;

  public get default_parameters(): ITupleTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    return `[${emit_elements(this.parameters.types, stack, ', ')}]`;
  }

}
