import {any_type} from '../constants';
import {AnyElement, Element} from '../element';
import {emit_jsdoc} from '../helpers/emit-jsdoc';
import {emit_optional} from '../helpers/emit-optional';
import {AnyType} from './type';

export interface IIndexSignatureRequiredParameters {
  name: string;
}

export interface IIndexSignatureOptionalParameters {
  jsdoc: string;
  kind: 'string' | 'number';
  type: AnyType;
  optional: boolean;
}

export class IndexSignature extends Element<IIndexSignatureRequiredParameters, IIndexSignatureOptionalParameters> {

  public get default_parameters(): IIndexSignatureOptionalParameters {
    return {
      jsdoc: '',
      kind: 'string',
      type: any_type,
      optional: false,
    };
  }

  public _emit(container: AnyElement | null): string {
    return `${this._emit_jsdoc()}${this._emit_raw(container)}`;
  }

  public _emit_jsdoc(): string {
    return emit_jsdoc(this.parameters.jsdoc);
  }

  public _emit_raw(_container: AnyElement | null): string {
    const {name, kind, type} = this.parameters;
    const optional = emit_optional(this.parameters.optional);
    return `[${name}: ${kind}]${optional}: ${type._emit(this)};`;
  }

}
