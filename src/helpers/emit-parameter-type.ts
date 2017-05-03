import {ParameterKinds} from '../constants';
import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array-type';
import {Stack} from '../stack';

export const emit_parameter_type =
  (type: Type, kind: ParameterKinds, stack: Stack): string =>
    (kind === ParameterKinds.REST)
      ? new ArrayType({owned: type}).emit(stack)
      : type.emit(stack);
