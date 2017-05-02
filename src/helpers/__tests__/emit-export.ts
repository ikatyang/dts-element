jest.unmock('../emit-export');

import {Element} from '../../element';
import {Document} from '../../elements/document';
import {Stack} from '../../stack';
import {emit_export} from '../emit-export';

const element: Element = Object.create(Element.prototype);
const document: Document = Object.create(Document.prototype);

it('should return empty string while last stack is not Element-Document', () => {
  expect(emit_export(true, new Stack([element, element]))).toBe('');
});

it('should return empty string while has_export is false', () => {
  expect(emit_export(false, new Stack())).toBe('');
});

it('should return empty string while last stack is Element-Document and has_export is true', () => {
  expect(emit_export(true, new Stack([document, element]))).toBe('export ');
});
