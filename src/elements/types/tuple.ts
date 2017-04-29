import {Container} from '../../collections';
import {emit_elements} from '../../helpers/emit-elements';
import {Type} from '../type';

export interface ITupleTypeRequiredParameters {
  owneds: Type[];
}

// tslint:disable-next-line no-empty-interface
export interface ITupleTypeOptionalParameters {}

export class TupleType extends Type<ITupleTypeRequiredParameters, ITupleTypeOptionalParameters> {

  public get default_parameters(): ITupleTypeOptionalParameters {
    return {};
  }

  public _emit(container: Container): string {
    return `[${emit_elements(this.parameters.owneds, container, ', ')}]`;
  }

}
