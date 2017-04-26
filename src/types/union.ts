import {Type, AnyType} from '../type';
import {AnyElement} from '../element';

export interface IUnionRequiredParameters {
  types: AnyType[];
}

// tslint:disable-next-line no-empty-interface
export interface IUnionOptionalParameters {}

export class UnionType extends Type<IUnionRequiredParameters, IUnionOptionalParameters> {

  public get default_parameters(): IUnionOptionalParameters {
    return {};
  }

  public _emit(_container: AnyElement): string {
    const types = this.parameters.types.map((type: AnyType) => type._emit(this));
    return `(${types.join(' | ')})`;
  }

}
