import {any_type} from '../../constants';
import {emit_generics} from '../../helpers/emit-generics';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Type} from '../type';
import {GenericType} from '../types/generic-type';

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

  public _emit_raw(stack: Stack): string {
    const {name, generics} = this.parameters;
    const generic = emit_generics(generics, stack);
    const target = this.parameters.target.emit(stack);
    return `type ${name}${generic} = ${target};`;
  }

}
