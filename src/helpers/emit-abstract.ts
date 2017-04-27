import {MemberOwned} from '../collections';
import {VariableDeclaration} from '../elements/declarations/variable';

// TODO: add support for FunctionDeclaration and ClassDeclaration
export const emit_abstract = (abstract: boolean, owned: MemberOwned): string =>
  abstract && (owned instanceof VariableDeclaration)
    ? 'abstract '
    : '';
