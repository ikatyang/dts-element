jest.unmock('../emit-function');

import {Element} from '../../element';
import {Member} from '../../elements/member';
import {Stack} from '../../stack';
import {emit_function} from '../emit-function';

const element: Element = Object.create(Element.prototype);
const member: Member = Object.create(Member.prototype);

it('should return empty string while stack is Member', () => {
  expect(emit_function(new Stack([member]))).toBe('');
});

it('should return empty string while stack is not Member', () => {
  expect(emit_function(new Stack([element]))).toBe('function ');
});
