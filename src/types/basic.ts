import { Type } from '../type';

export interface IBasicRequiredParameters {
  name: string;
}

// tslint:disable-next-line no-empty-interface
export interface IBasicOptionalParameters {}

export class BasicType extends Type<IBasicRequiredParameters, IBasicOptionalParameters> {

  public get default_parameters(): IBasicOptionalParameters {
    return {};
  }

  public emit(): string {
    return this.parameters.name;
  }

}
