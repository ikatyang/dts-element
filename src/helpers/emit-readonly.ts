// tslint:disable-next-line no-unused-variable
import {MemberOwned} from '../collections';
import {AnyElement} from '../element';
import {VariableDeclaration} from '../elements/declarations/variable';
// tslint:disable-next-line no-unused-variable
import {IndexSignature} from '../elements/index-signature';

export const emit_readonly = (readonly: boolean, owned: MemberOwned): string =>
  readonly && (owned instanceof VariableDeclaration || owned instanceof IndexSignature)
    ? 'readonly '
    : '';
