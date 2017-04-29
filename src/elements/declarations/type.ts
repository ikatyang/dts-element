import {Container} from '../../collections';
import {any_type} from '../../constants';
import {emit_generics} from '../../helpers/emit-generics';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Type} from '../type';
import {GenericType} from '../types/generic';

export interface ITypeDeclarationRequiredParameters {
  name: string;
}

export interface ITypeDeclarationOptionalParameters {
  generics: GenericType[];
  target: Type;
}

export class TypeDeclaration
    extends Declaration<ITypeDeclarationRequiredParameters, ITypeDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & ITypeDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      target: any_type,
    });
  }

  public _emit_raw(_container: Container): string {
    const {name, generics} = this.parameters;
    const generic = emit_generics(generics, this);
    const target = this.parameters.target._emit(this);
    return `type ${name}${generic} = ${target};`;
  }

}
