import {AnyElement} from '../../element';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {AnyType} from '../type';

export interface IVariableRequiredParameters {
  kind: 'var' | 'let' | 'const';
  type: AnyType;
}

// tslint:disable-next-line no-empty-interface
export interface IVariableOptionalParameters {}

export class VariableDeclaration extends Declaration<IVariableRequiredParameters, IVariableOptionalParameters> {

  public _emit(_container: AnyElement): string {
    const {name, kind, type: a_type} = this.parameters;
    return `declare ${kind} ${name}: ${a_type._emit(this)};`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & IVariableOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters);
  }

}
