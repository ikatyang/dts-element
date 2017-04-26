import {AnyElement} from '../../element';
import {AnyType, Type} from '../type';

export interface IUnionTypeRequiredParameters {
  types: AnyType[];
}

// tslint:disable-next-line no-empty-interface
export interface IUnionTypeOptionalParameters {}

export class UnionType extends Type<IUnionTypeRequiredParameters, IUnionTypeOptionalParameters> {

  public get default_parameters(): IUnionTypeOptionalParameters {
    return {};
  }

  public _emit(_container: AnyElement | null): string {
    const types = this.parameters.types.map((type: AnyType) => type._emit(this));
    return `(${types.join(' | ')})`;
  }

}
