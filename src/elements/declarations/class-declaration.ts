import {Container} from '../../collections';
import {emit_abstract} from '../../helpers/emit-abstract';
import {emit_extends} from '../../helpers/emit-extends';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_members} from '../../helpers/emit-members';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {ClassMember} from '../members/class-member';
import {ClassType} from '../types/class-type';
import {GenericType} from '../types/generic-type';

export interface IClassDeclarationRequiredParameters {
  name: string;
}

export interface IClassDeclarationOptionalParameters {
  generics: GenericType[];
  members: ClassMember[];
  extends: ClassType | null;
  abstract: boolean;
}

export class ClassDeclaration
    extends Declaration<IClassDeclarationRequiredParameters, IClassDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & IClassDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      members: [],
      extends: null,
      abstract: false,
    });
  }

  public _emit_raw(container: Container): string {
    const {name, members, generics} = this.parameters;
    const generic = emit_generics(generics, this);
    const abstract = emit_abstract(this.parameters.abstract, this);
    const an_extends = emit_extends(this.parameters.extends, this);
    return `${abstract}class ${name}${generic}${an_extends} ${emit_members(members, this)}`;
  }

}
