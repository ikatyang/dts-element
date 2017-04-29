import {Container} from '../collections';
import {Member} from '../elements/member';

const valid_name_regex = /^[\$a-z_][\$a-z_0-9]*$/i;
const invalid_name_regex = /^(?:new|constructor)$/;

// TODO: add support for Enum
export const emit_declaration_name = (name: string | null, container: Container): string =>
  (name === null)
    ? ''
    : !(container instanceof Member) || (valid_name_regex.test(name) && !invalid_name_regex.test(name))
      ? name
      : JSON.stringify(name);
