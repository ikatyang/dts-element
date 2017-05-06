import {Element} from '../element';
import {Stack} from '../stack';
import {GenericType} from './types/generic-type';

export interface IGenericDefinitionRequiredParameters {
  owned: GenericType;
}

// tslint:disable-next-line:no-empty-interface
export interface IGenericDefinitionOptionalParameters {}

/**
 * A wrapper for GenericType to determine it as a declaration or a variable
 */
export class GenericDefinition
    extends Element<IGenericDefinitionRequiredParameters, IGenericDefinitionOptionalParameters> {

  private _instance_of_generic_declaration: true;

  public get default_parameters(): IGenericDefinitionOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    return this.parameters.owned.emit(stack);
  }

}
