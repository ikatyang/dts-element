import {any_type} from '../constants';
import {AnyElement, Element} from '../element';
import {emit_optional} from '../helpers/emit-optional';
import {AnyType} from './type';

export interface IIndexSignatureRequiredParameters {
  name: string;
}

export interface IIndexSignatureOptionalParameters {
  kind: 'string' | 'number';
  type: AnyType;
  optional: boolean;
}

export class IndexSignature extends Element<IIndexSignatureRequiredParameters, IIndexSignatureOptionalParameters> {

  public get default_parameters(): IIndexSignatureOptionalParameters {
    return {
      kind: 'string',
      type: any_type,
      optional: false,
    };
  }

  public _emit(_container: AnyElement | null): string {
    const {name, kind, type} = this.parameters;
    const optional = emit_optional(this.parameters.optional);
    return `[${name}: ${kind}]${optional}: ${type._emit(this)};`;
  }

}
