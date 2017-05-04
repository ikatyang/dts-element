import {any_type} from '../constants';
import {Element} from '../element';
import {emit_optional} from '../helpers/emit-optional';
import {Stack} from '../stack';
import {mixin_class} from '../utils/mixin-class';
import {JSDocProtocol} from './declaration';
import {Type} from './type';

export interface IIndexSignatureRequiredParameters {
  name: string;
}

export interface IIndexSignatureOptionalParameters {
  jsdoc: string;
  kind: 'number' | 'string';
  type: Type;
  optional: boolean;
}

/**
 * ```ts
 * {
 *   [index: number]: any; // <--
 * }
 * ```
 */
export class IndexSignature
    extends Element<IIndexSignatureRequiredParameters, IIndexSignatureOptionalParameters> implements JSDocProtocol {

  public get default_parameters(): IIndexSignatureOptionalParameters {
    return {
      jsdoc: '',
      kind: 'string',
      type: any_type,
      optional: false,
    };
  }

  public _emit_jsdoc: () => string;

  private _instance_of_index_signature: true;

  // istanbul ignore next
  // tslint:disable-next-line prefer-function-over-method
  public _emit(_stack: Stack): string { return '[PLACEHOLDER]'; }

  public _emit_raw(stack: Stack): string {
    const {name, kind, type} = this.parameters;
    const optional = emit_optional(this.parameters.optional);
    return `[${name}: ${kind}]${optional}: ${type.emit(stack)};`;
  }

}

mixin_class(IndexSignature, [JSDocProtocol]);
