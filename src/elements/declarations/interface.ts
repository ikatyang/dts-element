import {AnyElement} from '../../element';
import {emit_generics} from '../../helpers/emit-generics';
import {indent} from '../../helpers/indent';
import {AnyDeclaration, Declaration, IDeclarationOptionalParameters} from '../declaration';
import {GenericType} from '../types/generic';

// tslint:disable-next-line no-empty-interface
export interface IInterfaceDeclarationRequiredParameters {}

export interface IInterfaceDeclarationOptionalParameters {
  generics: GenericType[];
  children: AnyDeclaration[];
}

export class InterfaceDeclaration
    extends Declaration<IInterfaceDeclarationRequiredParameters, IInterfaceDeclarationOptionalParameters> {

  public _emit(_container: AnyElement | null): string {
    const {name, children, generics} = this.parameters;
    const generic = emit_generics(generics, this);
    const content = children
      .map((declaration: AnyDeclaration) => declaration._emit(this))
      .join('\n');
    return `${this.jsdoc}interface ${name}${generic} {\n${indent(content)}\n}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & IInterfaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      children: [],
    });
  }

}
