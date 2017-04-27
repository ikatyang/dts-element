jest.unmock('../emit-declare');

import {AnyElement, Element} from '../../element';
import {Document} from '../../elements/document';
import {emit_declare} from '../emit-declare';

const element: AnyElement = Object.create(Element.prototype);
const document: Document = Object.create(Document.prototype);

it('should return empty string while container is not Document or null', () => {
  expect(emit_declare(element)).toBe('');
});

it('should return empty string while container is Document or null', () => {
  expect(emit_declare(document)).toBe('declare ');
});
