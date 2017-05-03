import {EnumMember} from '../elements/members/enum-member';
import {Stack} from '../stack';
import {indent_every_line} from './indent-every-line';

export const emit_enum_members = (members: EnumMember[], stack: Stack): string => {
  let counter = 0;
  return (members.length === 0)
    ? '{}'
    : `{\n${indent_every_line(members.map((member: EnumMember): string =>
      member.emit(stack, (value: number | null): number => {
        counter = (value !== null)
          ? value
          : counter;
        return counter++;
      })).join(',\n'))}\n}`;
};
