import {emit_declare} from '../../helpers/emit-declare';
import {emit_export} from '../../helpers/emit-export';
import {emit_members} from '../../helpers/emit-members';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';

export interface INamespaceDeclarationRequiredParameters {
  name: string;
}

export interface INamespaceDeclarationOptionalParameters {
  children: Declaration[];
  export: boolean;
}

export class NamespaceDeclaration
    extends Declaration<INamespaceDeclarationRequiredParameters, INamespaceDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      children: [],
      export: false,
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name} = this.parameters;
    const declare = emit_declare(stack);
    const an_export = emit_export(this.parameters.export, stack);
    return `${an_export}${declare}namespace ${name} ${emit_members(this.parameters.children, stack)}`;
  }

}
