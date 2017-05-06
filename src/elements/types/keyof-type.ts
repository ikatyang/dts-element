import {emit_brackets} from '../../helpers/emit-brackets';
import {Stack} from '../../stack';
import {Type} from '../type';

export interface IKeyofTypeRequiredParameters {
  owned: Type;
}

// tslint:disable-next-line:no-empty-interface
export interface IKeyofTypeOptionalParameters {}

/**
 * ```ts
 * type X = keyof some_type;
 * //       ^^^^^^^^^^^^^^^
 * ```
 */
export class KeyofType extends Type<IKeyofTypeRequiredParameters, IKeyofTypeOptionalParameters> {

  private _instance_of_keyof_type: true;

  public get default_parameters(): IKeyofTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const {owned} = this.parameters;
    return `keyof ${emit_brackets(owned.emit(stack), owned)}`;
  }

}
