import {any_type} from '../../constants';
import {AnyElement} from '../../element';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {AnyType} from '../type';

// tslint:disable-next-line no-empty-interface
export interface IVariableDeclarationRequiredParameters {}

export interface IVariableDeclarationOptionalParameters {
  kind: 'var' | 'let' | 'const';
  type: AnyType;
}

export class VariableDeclaration
    extends Declaration<IVariableDeclarationRequiredParameters, IVariableDeclarationOptionalParameters> {

  public _emit(_container: AnyElement | null): string {
    const {name, kind, type: a_type} = this.parameters;
    return `declare ${kind} ${name}: ${a_type._emit(this)};`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & IVariableDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      kind: 'var' as 'var',
      type: any_type,
    });
  }

}
