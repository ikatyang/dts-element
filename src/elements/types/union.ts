import {Container} from '../../collections';

import {Type} from '../type';

export interface IUnionTypeRequiredParameters {
  types: Type[];
}

// tslint:disable-next-line no-empty-interface
export interface IUnionTypeOptionalParameters {}

export class UnionType extends Type<IUnionTypeRequiredParameters, IUnionTypeOptionalParameters> {

  public get default_parameters(): IUnionTypeOptionalParameters {
    return {};
  }

  public _emit(_container: Container): string {
    const types = this.parameters.types.map((type: Type) => type._emit(this));
    return `(${types.join(' | ')})`;
  }

}
