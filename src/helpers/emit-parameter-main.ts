import {ParameterFlag} from '../elements/parameter';
import {emit_optional} from './emit-optional';
import {emit_rest} from './emit-rest';

export const emit_parameter_main = (name: string, flag: ParameterFlag): string =>
  `${emit_rest(flag === 'rest')}${name}${emit_optional(flag === 'optional')}`;
