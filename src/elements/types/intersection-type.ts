import {emit_brackets} from '../../helpers/emit-brackets';
import {Stack} from '../../stack';
import {Type} from '../type';

export interface IIntersectionTypeRequiredParameters {
  types: Type[];
}

// tslint:disable-next-line:no-empty-interface
export interface IIntersectionTypeOptionalParameters {}

/**
 * ```ts
 * type X = some_type_1 & some_type_2;
 * //       ^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export class IntersectionType extends Type<IIntersectionTypeRequiredParameters, IIntersectionTypeOptionalParameters> {

  private _instance_of_intersection_type: true;

  public get default_parameters(): IIntersectionTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const types = this.parameters.types.map((type: Type) => emit_brackets(type.emit(stack), type));
    return `${types.join(' & ')}`;
  }

}
