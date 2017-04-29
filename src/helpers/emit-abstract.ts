import {ClassDeclaration} from '../elements/declarations/class';
import {FunctionDeclaration} from '../elements/declarations/function';
import {VariableDeclaration} from '../elements/declarations/variable';
import {MemberOwned} from '../elements/member';

// tslint:disable-next-line no-unused-variable
import {IndexSignature} from '../elements/index-signature';

export const emit_abstract = (abstract: boolean, owned: MemberOwned | ClassDeclaration): string =>
  (abstract &&
    (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration || owned instanceof ClassDeclaration))
      ? 'abstract '
      : '';
