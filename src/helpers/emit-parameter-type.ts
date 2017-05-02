import {ParameterFlag} from '../constants';
import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array-type';
import {Stack} from '../stack';

export const emit_parameter_type =
  (type: Type, flag: ParameterFlag, stack: Stack): string =>
    (flag === ParameterFlag.REST)
      ? new ArrayType({owned: type}).emit(stack)
      : type.emit(stack);
