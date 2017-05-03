import {ClassAccessor, CLASS_ACCESSOR_MAP} from '../constants';
import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {VariableDeclaration} from '../elements/declarations/variable-declaration';
import {MemberOwned} from '../elements/member';

export const emit_accessor = (accessor: ClassAccessor, owned: MemberOwned): string =>
  (accessor !== ClassAccessor.NONE) && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? `${CLASS_ACCESSOR_MAP[accessor]} `
    : '';
