import {AnyElement} from '../../element';
import {indent} from '../../helpers/indent';
import {AnyDeclaration, Declaration, IDeclarationOptionalParameters} from '../declaration';

// tslint:disable-next-line no-empty-interface
export interface INamespaceRequiredParameters {}

export interface INamespaceOptionalParameters {
  children: AnyDeclaration[];
}

export class NamespaceDeclaration extends Declaration<INamespaceRequiredParameters, INamespaceOptionalParameters> {

  public _emit(_container: AnyElement): string {
    const {name, children} = this.parameters;
    const content = children
      .map((declaration: AnyDeclaration) => declaration._emit(this))
      .join('\n');
    return `${this.jsdoc}declare namespace ${name} {\n${indent(content)}\n}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      children: [],
    });
  }

}
