jest.unmock('../emit-declaration-name');

import {Member} from '../../elements/member';
import {emit_declaration_name} from '../emit-declaration-name';

const member: Member = Object.create(Member.prototype);

it('should return empty string while name is null ', () => {
  expect(emit_declaration_name(null, null)).toBe('');
});

it('should return raw string while container is not Memeber', () => {
  const name = 'name';
  expect(emit_declaration_name(name, null)).toBe(name);
});

it('should return raw string while name is a valid name of variable ', () => {
  const name = 'name';
  expect(emit_declaration_name(name, member)).toBe(name);
});

it('should return quoted string while name is not a valid name of variable and container is Member ', () => {
  const invalid_name = 'abc-def';
  expect(emit_declaration_name(invalid_name, member)).toBe(`"${invalid_name}"`);
});
