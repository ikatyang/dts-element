import {Type, AnyType} from '../type';

export interface IUnionRequiredParameters {
  types: AnyType[];
}

// tslint:disable-next-line no-empty-interface
export interface IUnionOptionalParameters {}

export class UnionType extends Type<IUnionRequiredParameters, IUnionOptionalParameters> {

  public get default_parameters(): IUnionOptionalParameters {
    return {};
  }

  public emit(): string {
    const types = this.parameters.types.map((type: AnyType) => type.emit());
    return `(${types.join(' | ')})`;
  }

}
