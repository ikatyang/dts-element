jest.unmock('../emit-declaration-name');

import {Member} from '../../elements/member';
import {Stack} from '../../stack';
import {emit_declaration_name} from '../emit-declaration-name';

const member: Member = Object.create(Member.prototype);

it('should return empty string while name is null ', () => {
  expect(emit_declaration_name(null, new Stack())).toBe('');
});

it('should return raw string while stack is not Memeber', () => {
  const name = 'name';
  expect(emit_declaration_name(name, new Stack())).toBe(name);
});

it('should return raw string while name is a valid name of variable ', () => {
  const name = 'name';
  expect(emit_declaration_name(name, new Stack([member]))).toBe(name);
});

it('should return quoted string while name is not a valid name of variable and stack is Member ', () => {
  const invalid_name = 'abc-def';
  expect(emit_declaration_name(invalid_name, new Stack([member]))).toBe(`"${invalid_name}"`);
});
