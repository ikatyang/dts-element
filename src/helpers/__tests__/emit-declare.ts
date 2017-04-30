jest.unmock('../emit-declare');

import {Element} from '../../element';
import {Document} from '../../elements/document';
import {Stack} from '../../stack';
import {emit_declare} from '../emit-declare';

const element: Element = Object.create(Element.prototype);
const document: Document = Object.create(Document.prototype);

it('should return empty string while stack is not Document or null', () => {
  expect(emit_declare(new Stack([element]))).toBe('');
});

it('should return empty string while stack is Document or null', () => {
  expect(emit_declare(new Stack([document]))).toBe('declare ');
});
