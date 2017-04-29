import {FunctionDeclaration} from '../elements/declarations/function';
import {VariableDeclaration} from '../elements/declarations/variable';
import {MemberOwned} from '../elements/member';

export const emit_static = (is_static: boolean, owned: MemberOwned): string =>
  is_static && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? 'static '
    : '';
