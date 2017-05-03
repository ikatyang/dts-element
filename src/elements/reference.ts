import {ReferenceKind, REFERENCE_KIND_MAP} from '../constants';
import {Element} from '../element';
import {Stack} from '../stack';

export interface IReferenceRequiredParameters {
  value: string;
}

export interface IReferenceOptionalParameters {
  kind: ReferenceKind;
}

export class Reference extends Element<IReferenceRequiredParameters, IReferenceOptionalParameters> {

  private _instance_of_reference: true;

  public get default_parameters(): IReferenceOptionalParameters {
    return {
      kind: ReferenceKind.PATH,
    };
  }

  public _emit(_stack: Stack): string {
    const {kind, value} = this.parameters;
    return `/// <reference ${REFERENCE_KIND_MAP[kind]}=${JSON.stringify(value)} />`;
  }

}
