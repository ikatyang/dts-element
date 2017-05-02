jest.unmock('../emit-declare');

import {Element} from '../../element';
import {Document} from '../../elements/document';
import {Stack} from '../../stack';
import {emit_declare} from '../emit-declare';

const element: Element = Object.create(Element.prototype);
const document: Document = Object.create(Document.prototype);

it('should return empty string while last-stack is not Element-Document', () => {
  expect(emit_declare(new Stack([element, element]))).toBe('');
});

it('should return empty string while last-stack is Element-Document', () => {
  expect(emit_declare(new Stack([document, element]))).toBe('declare ');
});
