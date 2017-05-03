import {ParameterKinds} from '../constants';
import {emit_optional} from './emit-optional';
import {emit_rest} from './emit-rest';

export const emit_parameter_main = (name: string, kind: ParameterKinds): string =>
  `${emit_rest(kind === ParameterKinds.REST)}${name}${emit_optional(kind === ParameterKinds.OPTIONAL)}`;
