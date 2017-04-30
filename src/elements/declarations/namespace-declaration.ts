import {emit_declare} from '../../helpers/emit-declare';
import {emit_elements} from '../../helpers/emit-elements';
import {indent_every_line} from '../../helpers/indent-every-line';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';

export interface INamespaceDeclarationRequiredParameters {
  name: string;
}

export interface INamespaceDeclarationOptionalParameters {
  children: Declaration[];
}

export class NamespaceDeclaration
    extends Declaration<INamespaceDeclarationRequiredParameters, INamespaceDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      children: [],
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name} = this.parameters;
    const content = emit_elements(this.parameters.children, stack);
    const declare = emit_declare(stack);
    return `${declare}namespace ${name} {\n${indent_every_line(content)}\n}`;
  }

}
