import {AnyElement} from '../../element';
import {AnyType, Type} from '../type';

export interface IArrayTypeRequiredParameters {
  owned: AnyType;
}

// tslint:disable-next-line no-empty-interface
export interface IArrayTypeOptionalParameters {}

export class ArrayType extends Type<IArrayTypeRequiredParameters, IArrayTypeOptionalParameters> {

  public get default_parameters(): IArrayTypeOptionalParameters {
    return {};
  }

  public _emit(container: AnyElement | null): string {
    return `${this.parameters.owned._emit(container)}[]`;
  }

}
