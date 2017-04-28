import {Container} from '../../collections';

import {AnyType, Type} from '../type';

export interface IIntersectionTypeRequiredParameters {
  types: AnyType[];
}

// tslint:disable-next-line no-empty-interface
export interface IIntersectionTypeOptionalParameters {}

export class IntersectionType extends Type<IIntersectionTypeRequiredParameters, IIntersectionTypeOptionalParameters> {

  public get default_parameters(): IIntersectionTypeOptionalParameters {
    return {};
  }

  public _emit(_container: Container): string {
    const types = this.parameters.types.map((type: AnyType) => type._emit(this));
    return `(${types.join(' & ')})`;
  }

}
