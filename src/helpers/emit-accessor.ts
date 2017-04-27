import {MemberOwned} from '../collections';
import {VariableDeclaration} from '../elements/declarations/variable';

// TODO: add support for FunctionDeclaration
export const emit_accessor = (accessor: 'public' | 'protected' | 'private' | null, owned: MemberOwned): string =>
  (accessor !== null) && (owned instanceof VariableDeclaration)
    ? `${accessor} `
    : '';
