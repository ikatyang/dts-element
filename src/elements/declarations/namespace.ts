import {AnyElement} from '../../element';
import {emit_declare} from '../../helpers/emit-declare';
import {indent} from '../../helpers/indent';
import {AnyDeclaration, Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Document} from '../document';

// tslint:disable-next-line no-empty-interface
export interface INamespaceDeclarationRequiredParameters {}

export interface INamespaceDeclarationOptionalParameters {
  children: AnyDeclaration[];
}

export class NamespaceDeclaration
    extends Declaration<INamespaceDeclarationRequiredParameters, INamespaceDeclarationOptionalParameters> {

  public _emit(container: AnyElement | null): string {
    const {name, children} = this.parameters;
    const content = children
      .map((declaration: AnyDeclaration) => declaration._emit(this))
      .join('\n');
    const declare = emit_declare(container);
    return `${this.jsdoc}${declare}namespace ${name} {\n${indent(content)}\n}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      children: [],
    });
  }

}
