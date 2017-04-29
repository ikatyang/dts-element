import {VariableDeclaration} from '../elements/declarations/variable';
import {IndexSignature} from '../elements/index-signature';
import {MemberOwned} from '../elements/member';

export const emit_readonly = (readonly: boolean, owned: MemberOwned): string =>
  readonly && (owned instanceof VariableDeclaration || owned instanceof IndexSignature)
    ? 'readonly '
    : '';
