import {Element} from '../element';
import {Stack} from '../stack';
import {GenericType} from './types/generic-type';

export interface IGenericDefinitionRequiredParameters {
  owned: GenericType;
}

// tslint:disable-next-line no-empty-interface
export interface IGenericDefinitionOptionalParameters {}

export class GenericDefinition
    extends Element<IGenericDefinitionRequiredParameters, IGenericDefinitionOptionalParameters> {

  public get default_parameters(): IGenericDefinitionOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    return this.parameters.owned.emit(stack);
  }

}
