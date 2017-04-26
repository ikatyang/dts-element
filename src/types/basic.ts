import {Type} from '../type';
import {AnyElement} from '../element';

export interface IBasicRequiredParameters {
  name: string;
}

// tslint:disable-next-line no-empty-interface
export interface IBasicOptionalParameters {}

export class BasicType extends Type<IBasicRequiredParameters, IBasicOptionalParameters> {

  public get default_parameters(): IBasicOptionalParameters {
    return {};
  }

  public _emit(_container: AnyElement): string {
    return this.parameters.name;
  }

}
