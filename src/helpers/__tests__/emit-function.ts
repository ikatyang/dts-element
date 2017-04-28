jest.unmock('../emit-function');

import {Element} from '../../element';
import {Member} from '../../elements/member';
import {emit_function} from '../emit-function';

const element: Element = Object.create(Element.prototype);
const member: Member = Object.create(Member.prototype);

it('should return empty string while container is Member', () => {
  expect(emit_function(member)).toBe('');
});

it('should return empty string while container is not Member', () => {
  expect(emit_function(element)).toBe('function ');
});
