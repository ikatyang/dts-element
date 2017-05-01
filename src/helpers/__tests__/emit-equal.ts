jest.unmock('../emit-equal');

import {GenericDefinition} from '../../elements/generic-definition';
import {EnumMember} from '../../elements/members/enum-member';
import {BasicType} from '../../elements/types/basic-type';
import {Stack} from '../../stack';
import {emit_equal} from '../emit-equal';

const name = 'A';
const basic_type = new BasicType({name});
const generic_definition: GenericDefinition = Object.create(GenericDefinition.prototype);
const enum_member: EnumMember = Object.create(EnumMember.prototype);

it('should return empty string while default is null', () => {
  expect(emit_equal(null, new Stack([generic_definition]))).toBe('');
});

it('should return empty string while stack is not GenericDefinition or EnumMember', () => {
  expect(emit_equal(basic_type, new Stack())).toBe('');
});

it('should return number while value is number and stack is EnumMember', () => {
  const value = 123;
  expect(emit_equal(value, new Stack([enum_member]))).toBe(` = ${value}`);
});

it('should return emitted type while value is Type and stack is GenericDefinition', () => {
  expect(emit_equal(basic_type, new Stack([generic_definition]))).toMatchSnapshot();
});
