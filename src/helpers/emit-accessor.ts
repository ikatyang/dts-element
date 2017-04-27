import {MemberOwned} from '../collections';
import {FunctionDeclaration} from '../elements/declarations/function';
import {VariableDeclaration} from '../elements/declarations/variable';

export const emit_accessor = (accessor: 'public' | 'protected' | 'private' | null, owned: MemberOwned): string =>
  (accessor !== null) && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? `${accessor} `
    : '';
