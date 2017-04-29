import {Container} from '../../collections';
import {emit_generics} from '../../helpers/emit-generics';
import {Type} from '../type';

// TODO: support for ClassDeclaration
export interface IClassTypeRequiredParameters {
  class: string;
}

export interface IClassTypeOptionalParameters {
  generics: Type[];
}

export class ClassType extends Type<IClassTypeRequiredParameters, IClassTypeOptionalParameters> {

  public get default_parameters(): IClassTypeOptionalParameters {
    return {
      generics: [],
    };
  }

  public _emit(_container: Container): string {
    const name = this.parameters.class;
    return `${name}${emit_generics(this.parameters.generics, this)}`;
  }

}
