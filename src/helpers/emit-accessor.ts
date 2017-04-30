import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {VariableDeclaration} from '../elements/declarations/variable-declaration';
import {MemberOwned} from '../elements/member';
import {ClassAccessor} from '../elements/members/class-member';

export const emit_accessor = (accessor: ClassAccessor, owned: MemberOwned): string =>
  (accessor !== null) && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? `${accessor} `
    : '';
