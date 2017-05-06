import {ClassDeclaration} from '../elements/declarations/class-declaration';
import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {VariableDeclaration} from '../elements/declarations/variable-declaration';
import {ObjectMemberOwned} from '../elements/members/object-member';

// tslint:disable-next-line:no-unused-variable
import {Constructor} from '../elements/constructor';
import {IndexSignature} from '../elements/index-signature';

export const emit_abstract = (abstract: boolean, owned: ObjectMemberOwned | ClassDeclaration): string =>
  (abstract &&
    (owned instanceof VariableDeclaration || owned instanceof FunctionDeclaration || owned instanceof ClassDeclaration))
      ? 'abstract '
      : '';
