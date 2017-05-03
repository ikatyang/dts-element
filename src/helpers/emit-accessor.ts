import {ClassAccessor, CLASS_ACCESSOR_MAP} from '../constants';
import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {VariableDeclaration} from '../elements/declarations/variable-declaration';
import {ObjectMemberOwned} from '../elements/members/object-member';

export const emit_accessor = (accessor: ClassAccessor, owned: ObjectMemberOwned): string =>
  (accessor !== ClassAccessor.NONE) && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? `${CLASS_ACCESSOR_MAP[accessor]} `
    : '';
