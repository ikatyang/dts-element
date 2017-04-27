import {AnyElement} from '../../element';
import {emit_generics} from '../../helpers/emit-generics';
import {indent_every_line} from '../../helpers/indent-every-line';
import {join_declarations} from '../../helpers/join-declarations';
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

  public get default_parameters(): IDeclarationOptionalParameters & IInterfaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      children: [],
    });
  }

  public _emit(_container: AnyElement | null): string {
    const {name, children, generics} = this.parameters;
    const generic = emit_generics(generics, this);
    const content = join_declarations(children, this);
    return `${this.jsdoc}interface ${name}${generic} {\n${indent_every_line(content)}\n}`;
  }

}
