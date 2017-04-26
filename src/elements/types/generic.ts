import {AnyElement} from '../../element';
import {InterfaceDeclaration} from '../declarations/interface';
import {AnyType, Type} from '../type';

export interface IGenericTypeRequiredParameters {
  name: string;
}

export interface IGenericTypeOptionalParameters {
  extends: AnyType | null;
  default: AnyType | null;
}

export class GenericType extends Type<IGenericTypeRequiredParameters, IGenericTypeOptionalParameters> {

  public get default_parameters(): IGenericTypeOptionalParameters {
    return {
      extends: null,
      default: null,
    };
  }

  public _emit(container: AnyElement | null): string {
    return (container instanceof InterfaceDeclaration)
      ? this.emit_definition()
      : this.parameters.name;
  }

  private emit_definition(): string {
    const a_extends = (this.parameters.extends === null)
      ? ''
      : ` extends ${this.parameters.extends._emit(this)}`;
    const a_default = (this.parameters.default === null)
      ? ''
      : ` = ${this.parameters.default._emit(this)}`;
    return `${this.parameters.name}${a_extends}${a_default}`;
  }

}
