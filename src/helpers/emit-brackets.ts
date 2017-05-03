import {Type} from '../elements/type';
import {ArrayType} from '../elements/types/array-type';
import {IntersectionType} from '../elements/types/intersection-type';
import {KeyofType} from '../elements/types/keyof-type';
import {TypeofType} from '../elements/types/typeof-type';
import {UnionType} from '../elements/types/union-type';

const need_brackets = (type: Type): boolean =>
  (type instanceof ArrayType)
  || (type instanceof IntersectionType)
  || (type instanceof KeyofType)
  || (type instanceof TypeofType)
  || (type instanceof UnionType);

export const emit_brackets = (content: string, type: Type): string =>
  need_brackets(type)
    ? `(${content})`
    : content;
