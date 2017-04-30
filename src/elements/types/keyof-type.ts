import {Container} from '../../collections';
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

  public _emit(container: Container): string {
    return `(keyof ${this.parameters.owned._emit(container)})`;
  }

}
