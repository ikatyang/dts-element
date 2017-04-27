jest.unmock('../emit-function');

import {AnyElement, Element} from '../../element';
import {AnyMember, Member} from '../../elements/member';
import {emit_function} from '../emit-function';

const element: AnyElement = Object.create(Element.prototype);
const member: AnyMember = Object.create(Member.prototype);

it('should return empty string while container is Member', () => {
  expect(emit_function(member)).toBe('');
});

it('should return empty string while container is not Member', () => {
  expect(emit_function(element)).toBe('function ');
});
