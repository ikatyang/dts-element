import {AnyElement} from '../../element';
import {AnyType, Type} from '../type';

export interface IIntersectionRequiredParameters {
  types: AnyType[];
}

// tslint:disable-next-line no-empty-interface
export interface IIntersectionOptionalParameters {}

export class IntersectionType extends Type<IIntersectionRequiredParameters, IIntersectionOptionalParameters> {

  public get default_parameters(): IIntersectionOptionalParameters {
    return {};
  }

  public _emit(_container: AnyElement | null): string {
    const types = this.parameters.types.map((type: AnyType) => type._emit(this));
    return `(${types.join(' & ')})`;
  }

}
