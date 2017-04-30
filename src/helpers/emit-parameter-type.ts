import {Container} from '../collections';
import {ParameterFlag} from '../elements/parameter';
import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array-type';

export const emit_parameter_type =
  (type: Type, flag: ParameterFlag, container: Container): string =>
    (flag === 'rest')
      ? new ArrayType({owned: type})._emit(container)
      : type._emit(container);
