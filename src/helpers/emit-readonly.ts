import {VariableDeclaration} from '../elements/declarations/variable-declaration';
import {IndexSignature} from '../elements/index-signature';
import {ObjectMemberOwned} from '../elements/members/object-member';

export const emit_readonly = (readonly: boolean, owned: ObjectMemberOwned): string =>
  readonly && (owned instanceof VariableDeclaration || owned instanceof IndexSignature)
    ? 'readonly '
    : '';
