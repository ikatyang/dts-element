import {emit_brackets} from '../../helpers/emit-brackets';
import {Stack} from '../../stack';
import {Type} from '../type';

export interface IUnionTypeRequiredParameters {
  types: Type[];
}

// tslint:disable-next-line no-empty-interface
export interface IUnionTypeOptionalParameters {}

export class UnionType extends Type<IUnionTypeRequiredParameters, IUnionTypeOptionalParameters> {

  public get default_parameters(): IUnionTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const types = this.parameters.types.map((type: Type) => emit_brackets(type.emit(stack), type));
    return `${types.join(' | ')}`;
  }

}
