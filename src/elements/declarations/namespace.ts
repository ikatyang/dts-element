import {AnyElement} from '../../element';
import {indent} from '../../helpers/indent';
import {AnyDeclaration, Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Document} from '../document';

// tslint:disable-next-line no-empty-interface
export interface INamespaceRequiredParameters {}

export interface INamespaceOptionalParameters {
  children: AnyDeclaration[];
}

export class NamespaceDeclaration extends Declaration<INamespaceRequiredParameters, INamespaceOptionalParameters> {

  public _emit(container: AnyElement | null): string {
    const {name, children} = this.parameters;
    const content = children
      .map((declaration: AnyDeclaration) => declaration._emit(this))
      .join('\n');
    const declare = (container instanceof Document) ? 'declare ' : '';
    return `${this.jsdoc}${declare}namespace ${name} {\n${indent(content)}\n}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      children: [],
    });
  }

}
