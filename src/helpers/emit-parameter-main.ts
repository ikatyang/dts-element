import {ParameterFlag} from '../constants';
import {emit_optional} from './emit-optional';
import {emit_rest} from './emit-rest';

export const emit_parameter_main = (name: string, flag: ParameterFlag): string =>
  `${emit_rest(flag === ParameterFlag.REST)}${name}${emit_optional(flag === ParameterFlag.OPTIONAL)}`;
