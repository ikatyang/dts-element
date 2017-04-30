import {ParameterFlag} from '../elements/parameter';
import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array-type';
import {Stack} from '../stack';

export const emit_parameter_type =
  (type: Type, flag: ParameterFlag, stack: Stack): string =>
    (flag === 'rest')
      ? new ArrayType({owned: type}).emit(stack)
      : type.emit(stack);
