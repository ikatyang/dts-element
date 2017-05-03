import {ParameterKind} from '../constants';
import {emit_optional} from './emit-optional';
import {emit_rest} from './emit-rest';

export const emit_parameter_main = (name: string, kind: ParameterKind): string =>
  `${emit_rest(kind === ParameterKind.REST)}${name}${emit_optional(kind === ParameterKind.OPTIONAL)}`;
