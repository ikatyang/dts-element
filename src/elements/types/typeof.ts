import {Container} from '../../collections';
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

  public _emit(_container: Container): string {
    return `(typeof ${this.parameters.owned.parameters.name})`;
  }

}
