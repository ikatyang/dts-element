import {Container} from '../../collections';
import {emit_declaration_name} from '../../helpers/emit-declaration-name';
import {emit_declare} from '../../helpers/emit-declare';
import {emit_elements} from '../../helpers/emit-elements';
import {indent_every_line} from '../../helpers/indent-every-line';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';

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
    const name = emit_declaration_name(this.parameters.name, container);
    const content = emit_elements(this.parameters.children, this);
    const declare = emit_declare(container);
    return `${declare}namespace ${name} {\n${indent_every_line(content)}\n}`;
  }

}
