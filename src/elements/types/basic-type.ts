import {Stack} from '../../stack';
import {Type} from '../type';

export interface IBasicTypeRequiredParameters {
  name: string;
}

// tslint:disable-next-line no-empty-interface
export interface IBasicTypeOptionalParameters {}

export class BasicType extends Type<IBasicTypeRequiredParameters, IBasicTypeOptionalParameters> {

  public get default_parameters(): IBasicTypeOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    return this.parameters.name;
  }

}
