import {Container} from '../../collections';
import {emit_elements} from '../../helpers/emit-elements';
import {emit_generics} from '../../helpers/emit-generics';
import {indent_every_line} from '../../helpers/indent-every-line';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {ObjectMember} from '../members/object';
import {GenericType} from '../types/generic';

// tslint:disable-next-line no-empty-interface
export interface IInterfaceDeclarationRequiredParameters {}

export interface IInterfaceDeclarationOptionalParameters {
  generics: GenericType[];
  children: ObjectMember[];
}

export class InterfaceDeclaration
    extends Declaration<IInterfaceDeclarationRequiredParameters, IInterfaceDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IInterfaceDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      children: [],
    });
  }

  public _emit_raw(_container: Container): string {
    const {name, children, generics} = this.parameters;
    const generic = emit_generics(generics, this);
    const content = emit_elements(children, this);
    return `interface ${name}${generic} {\n${indent_every_line(content)}\n}`;
  }

}
