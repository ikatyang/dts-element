import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Type} from '../type';

export interface ILiteralTypeRequiredParameters {
  value: boolean | number | string | Declaration;
}

// tslint:disable-next-line no-empty-interface
export interface ILiteralTypeOptionalParameters {}

/**
 * ```ts
 * type X = "123";
 * //       ^^^^^
 * ```
 */
export class LiteralType extends Type<ILiteralTypeRequiredParameters, ILiteralTypeOptionalParameters> {

  private _instance_of_literal_type: true;

  public get default_parameters(): ILiteralTypeOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {value} = this.parameters;
    return (value instanceof Declaration)
      ? JSON.stringify(value.parameters.name)
      : JSON.stringify(value);
  }

}
