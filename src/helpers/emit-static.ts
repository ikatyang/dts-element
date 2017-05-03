import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {VariableDeclaration} from '../elements/declarations/variable-declaration';
import {ObjectMemberOwned} from '../elements/members/object-member';

export const emit_static = (is_static: boolean, owned: ObjectMemberOwned): string =>
  is_static && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? 'static '
    : '';
