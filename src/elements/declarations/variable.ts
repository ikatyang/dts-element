import {Container, VariableKind} from '../../collections';
import {any_type} from '../../constants';
import {emit_declare} from '../../helpers/emit-declare';
import {emit_optional} from '../../helpers/emit-optional';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Type} from '../type';

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
    const {name, kind, type} = this.parameters;
    const optional = emit_optional(this.parameters.optional);
    const declare = emit_declare(container);
    return `${declare}${kind} ${name}${optional}: ${type._emit(this)};`;
  }

}
