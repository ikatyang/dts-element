import {Type, AnyType} from '../type';

export interface IIntersectionRequiredParameters {
  types: AnyType[];
}

// tslint:disable-next-line no-empty-interface
export interface IIntersectionOptionalParameters {}

export class IntersectionType extends Type<IIntersectionRequiredParameters, IIntersectionOptionalParameters> {

  public get default_parameters(): IIntersectionOptionalParameters {
    return {};
  }

  public emit(): string {
    const types = this.parameters.types.map((type: AnyType) => type.emit());
    return `(${types.join(' & ')})`;
  }

}
