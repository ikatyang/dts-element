import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {Type} from '../type';

export interface ITypeofTypeRequiredParameters {
  owned: Declaration;
}

// tslint:disable-next-line no-empty-interface
export interface ITypeofTypeOptionalParameters {}

export class TypeofType extends Type<ITypeofTypeRequiredParameters, ITypeofTypeOptionalParameters> {

  public get default_parameters(): ITypeofTypeOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {owned} = this.parameters;
    return `typeof ${owned.parameters.name}`;
  }

}
