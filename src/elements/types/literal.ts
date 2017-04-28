import {Container, LiteralValue} from '../../collections';
import {Type} from '../type';

export interface ILiteralTypeRequiredParameters {
  value: LiteralValue;
}

// tslint:disable-next-line no-empty-interface
export interface ILiteralTypeOptionalParameters {}

export class LiteralType extends Type<ILiteralTypeRequiredParameters, ILiteralTypeOptionalParameters> {

  public get default_parameters(): ILiteralTypeOptionalParameters {
    return {};
  }

  public _emit(_container: Container): string {
    return JSON.stringify(this.parameters.value);
  }

}
