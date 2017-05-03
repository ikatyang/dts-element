import {ParameterKind} from '../constants';
import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array-type';
import {Stack} from '../stack';

export const emit_parameter_type =
  (type: Type, kind: ParameterKind, stack: Stack): string =>
    (kind === ParameterKind.REST)
      ? new ArrayType({owned: type}).emit(stack)
      : type.emit(stack);
