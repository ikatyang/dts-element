import {Stack} from '../../stack';
import {Type} from '../type';

export interface IArrayTypeRequiredParameters {
  owned: Type;
}

// tslint:disable-next-line no-empty-interface
export interface IArrayTypeOptionalParameters {}

export class ArrayType extends Type<IArrayTypeRequiredParameters, IArrayTypeOptionalParameters> {

  public get default_parameters(): IArrayTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    return `${this.parameters.owned.emit(stack)}[]`;
  }

}
