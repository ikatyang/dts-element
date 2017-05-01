jest.unmock('../emit-variable-kind.ts');

import {Member} from '../../elements/member';
import {Stack} from '../../stack';
import {emit_variable_kind} from '../emit-variable-kind';

const member: Member = Object.create(Member.prototype);

it('should return empty string while stack is Member', () => {
  expect(emit_variable_kind('var', new Stack([member]))).toBe('');
});

it('should return kind while stack is not Member', () => {
  const kind = 'var';
  expect(emit_variable_kind(kind, new Stack())).toBe(`${kind} `);
});
