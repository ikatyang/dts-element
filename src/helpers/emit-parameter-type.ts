import {Container, ParameterFlag} from '../collections';
import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array';

export const emit_parameter_type =
  (type: Type, flag: ParameterFlag, container: Container): string =>
    (flag === 'rest')
      ? new ArrayType({owned: type})._emit(container)
      : type._emit(container);
