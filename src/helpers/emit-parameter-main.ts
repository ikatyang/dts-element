import {ParameterFlags} from '../constants';
import {emit_optional} from './emit-optional';
import {emit_rest} from './emit-rest';

export const emit_parameter_main = (name: string, flag: ParameterFlags): string =>
  `${emit_rest(flag === ParameterFlags.REST)}${name}${emit_optional(flag === ParameterFlags.OPTIONAL)}`;
