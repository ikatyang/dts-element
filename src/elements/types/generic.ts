import {AnyElement} from '../../element';
import {AnyType, Type} from '../type';

export interface IGenericRequiredParameters {
  name: string;
}

export interface IGenericOptionalParameters {
  extends: AnyType | null;
  default: AnyType | null;
}

export class GenericType extends Type<IGenericRequiredParameters, IGenericOptionalParameters> {

  public static stringify(generics: GenericType[], container: AnyElement): string {
    return (generics.length === 0)
      ? ''
      : `<${generics.map((generic: GenericType) => generic._emit(container)).join(', ')}>`;
  }

  public get default_parameters(): IGenericOptionalParameters {
    return {
      extends: null,
      default: null,
    };
  }

  public _emit(_container: AnyElement): string {
    return this.parameters.name;
  }

}
