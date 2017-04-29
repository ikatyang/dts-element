import {Container} from '../../collections';
import {emit_abstract} from '../../helpers/emit-abstract';
import {emit_declaration_name} from '../../helpers/emit-declaration-name';
import {emit_extends} from '../../helpers/emit-extends';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_object} from '../../helpers/emit-object';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {ClassMember} from '../members/class';
import {ClassType} from '../types/class';
import {GenericType} from '../types/generic';

export interface IClassDeclarationRequiredParameters {
  name: string;
}

export interface IClassDeclarationOptionalParameters {
  generics: GenericType[];
  children: ClassMember[];
  extends: ClassType | null;
  abstract: boolean;
}

export class ClassDeclaration
    extends Declaration<IClassDeclarationRequiredParameters, IClassDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IClassDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      children: [],
      extends: null,
      abstract: false,
    });
  }

  public _emit_raw(container: Container): string {
    const {children, generics} = this.parameters;
    const name = emit_declaration_name(this.parameters.name, container);
    const generic = emit_generics(generics, this);
    const abstract = emit_abstract(this.parameters.abstract, this);
    const an_extends = emit_extends(this.parameters.extends, this);
    return `${abstract}class ${name}${generic}${an_extends} ${emit_object(children, this)}`;
  }

}
