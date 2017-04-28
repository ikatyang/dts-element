import {Container} from '../collections';
import {AnyElement, Element} from '../element';

export interface IReferenceRequiredParameters {
  kind: 'path' | 'types';
  content: string;
}

// tslint:disable-next-line no-empty-interface
export interface IReferenceOptionalParameters {}

export class Reference extends Element<IReferenceRequiredParameters, IReferenceOptionalParameters> {

  public get default_parameters(): IReferenceOptionalParameters {
    return {};
  }

  public _emit(_container: Container): string {
    const {kind, content} = this.parameters;
    return `/// <reference ${kind}="${content}" />`;
  }

}
