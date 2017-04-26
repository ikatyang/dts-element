import {AnyElement} from '../../element';
import {genericify} from '../../helpers/genericify';
import {indent} from '../../helpers/indent';
import {AnyDeclaration, Declaration, IDeclarationOptionalParameters} from '../declaration';
import {GenericType} from '../types/generic';

// tslint:disable-next-line no-empty-interface
export interface IInterfaceRequiredParameters {}

export interface IInterfaceOptionalParameters {
  generics: GenericType[];
  children: AnyDeclaration[];
}

export class InterfaceDeclaration extends Declaration<IInterfaceRequiredParameters, IInterfaceOptionalParameters> {

  public _emit(_container: AnyElement): string {
    const {name, children, generics} = this.parameters;
    const generic = genericify(generics, this);
    const content = children
      .map((declaration: AnyDeclaration) => declaration._emit(this))
      .join('\n');
    return `${this.jsdoc}interface ${name}${generic} {\n${indent(content)}\n}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & IInterfaceOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      children: [],
    });
  }

}
