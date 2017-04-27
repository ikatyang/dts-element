import {MemberOwned} from '../collections';
import {FunctionDeclaration} from '../elements/declarations/function';
import {VariableDeclaration} from '../elements/declarations/variable';

// TODO: add support for ClassDeclaration
export const emit_abstract = (abstract: boolean, owned: MemberOwned): string =>
  abstract && (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration)
    ? 'abstract '
    : '';
