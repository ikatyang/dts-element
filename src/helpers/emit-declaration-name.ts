import {Member} from '../elements/member';
import {Stack} from '../stack';

const valid_name_regex = /^[\$a-z_][\$a-z_0-9]*$/i;
const invalid_name_regex = /^(?:new|constructor)$/;

// TODO: add support for Enum
export const emit_declaration_name = (name: string | null, stack: Stack): string =>
  (name === null)
    ? ''
    : !(stack.last_instances_of([Member as any])) || (valid_name_regex.test(name) && !invalid_name_regex.test(name))
      ? name
      : JSON.stringify(name);
