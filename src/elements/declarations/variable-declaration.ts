import {Container} from '../../collections';
import {any_type} from '../../constants';
import {emit_declaration_name} from '../../helpers/emit-declaration-name';
import {emit_declare} from '../../helpers/emit-declare';
import {emit_optional} from '../../helpers/emit-optional';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Type} from '../type';

export type VariableKind = 'var' | 'let' | 'const';

// tslint:disable-next-line no-empty-interface
export interface IVariableDeclarationRequiredParameters {}

export interface IVariableDeclarationOptionalParameters {
  kind: VariableKind;
  type: Type;
  optional: boolean;
}

export class VariableDeclaration
    extends Declaration<IVariableDeclarationRequiredParameters, IVariableDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IVariableDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      kind: 'var' as VariableKind,
      type: any_type,
      optional: false,
    });
  }

  public _emit_raw(container: Container): string {
    const {kind, type} = this.parameters;
    const name = emit_declaration_name(this.parameters.name, container);
    const optional = emit_optional(this.parameters.optional);
    const declare = emit_declare(container);
    return `${declare}${kind} ${name}${optional}: ${type._emit(this)};`;
  }

}
