import {FunctionDeclaration} from '../elements/declarations/function';
import {VariableDeclaration} from '../elements/declarations/variable';
import {MemberOwned} from '../elements/member';
import {ClassAccessor} from '../elements/members/class';

export const emit_accessor = (accessor: ClassAccessor, owned: MemberOwned): string =>
  (accessor !== null) && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? `${accessor} `
    : '';
