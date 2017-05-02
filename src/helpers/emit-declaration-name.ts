import {Declaration} from '../elements/declaration';
import {Member} from '../elements/member';
import {Stack} from '../stack';

const valid_name_regex = /^[\$a-z_][\$a-z_0-9]*$/i;
const invalid_name_regex = /^(?:new|constructor)$/;

const is_member_stack = (stack: Stack): boolean =>
  stack.last_instances_of([Member as any]) || stack.last_instances_of([Declaration as any, Member as any]);

export const emit_declaration_name = (name: string | null, stack: Stack): string =>
  (name === null)
    ? ''
    : !is_member_stack(stack) || (valid_name_regex.test(name) && !invalid_name_regex.test(name))
        ? name
        : JSON.stringify(name);
