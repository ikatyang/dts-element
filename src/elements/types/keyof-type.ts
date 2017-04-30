import {Stack} from '../../stack';
import {Type} from '../type';

export interface IKeyofTypeRequiredParameters {
  owned: Type;
}

// tslint:disable-next-line no-empty-interface
export interface IKeyofTypeOptionalParameters {}

export class KeyofType extends Type<IKeyofTypeRequiredParameters, IKeyofTypeOptionalParameters> {

  public get default_parameters(): IKeyofTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    return `(keyof ${this.parameters.owned.emit(stack)})`;
  }

}
