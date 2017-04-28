import {Container} from '../../collections';
import {emit_declare} from '../../helpers/emit-declare';
import {indent_every_line} from '../../helpers/indent-every-line';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Document} from '../document';

// tslint:disable-next-line no-empty-interface
export interface INamespaceDeclarationRequiredParameters {}

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

  public _emit_raw(container: Container): string {
    const {name, children} = this.parameters;
    const content = children
      .map((declaration: Declaration) => declaration._emit(this))
      .join('\n');
    const declare = emit_declare(container);
    return `${declare}namespace ${name} {\n${indent_every_line(content)}\n}`;
  }

}
