import {any_type} from '../../constants';
import {emit_export} from '../../helpers/emit-export';
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
  type: Type;
  export: boolean;
}

export class TypeDeclaration
    extends Declaration<ITypeDeclarationRequiredParameters, ITypeDeclarationOptionalParameters> {

  private _instance_of_type_declaration: true;

  public get default_parameters(): IDeclarationOptionalParameters & ITypeDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      generics: [],
      type: any_type,
      export: false,
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name, generics} = this.parameters;
    const generic = emit_generics(generics, stack, true);
    const target = this.parameters.type.emit(stack);
    const an_export = emit_export(this.parameters.export, stack);
    return `${an_export}type ${name}${generic} = ${target};`;
  }

}
