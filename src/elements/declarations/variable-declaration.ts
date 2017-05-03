import {any_type} from '../../constants';
import {emit_declaration_name} from '../../helpers/emit-declaration-name';
import {emit_declare} from '../../helpers/emit-declare';
import {emit_export} from '../../helpers/emit-export';
import {emit_optional} from '../../helpers/emit-optional';
import {emit_variable_kind} from '../../helpers/emit-variable-kind';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Type} from '../type';

export type VariableKind = 'var' | 'let' | 'const';

export interface IVariableDeclarationRequiredParameters {
  name: string;
}

export interface IVariableDeclarationOptionalParameters {
  kind: VariableKind;
  type: Type;
  optional: boolean;
  export: boolean;
}

export class VariableDeclaration
    extends Declaration<IVariableDeclarationRequiredParameters, IVariableDeclarationOptionalParameters> {

  private _instance_of_variable_declaration: true;

  public get default_parameters(): IDeclarationOptionalParameters & IVariableDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      kind: 'var' as VariableKind,
      type: any_type,
      optional: false,
      export: false,
    });
  }

  public _emit_raw(stack: Stack): string {
    const {type} = this.parameters;
    const name = emit_declaration_name(this.parameters.name, stack);
    const optional = emit_optional(this.parameters.optional);
    const declare = emit_declare(stack);
    const kind = emit_variable_kind(this.parameters.kind, stack);
    const an_export = emit_export(this.parameters.export, stack);
    return `${an_export}${declare}${kind}${name}${optional}: ${type.emit(stack)};`;
  }

}
