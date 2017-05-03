import {emit_brackets} from '../../helpers/emit-brackets';
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
    const {owned} = this.parameters;
    return `keyof ${emit_brackets(owned.emit(stack), owned)}`;
  }

}
