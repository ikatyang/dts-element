import {Document} from '../../elements/document';
import {emit_declare} from '../emit-declare';

it('should return empty string while container is not Document', () => {
  expect(emit_declare(null)).toBe('');
});

it('should return empty string while container is Document', () => {
  const document = Object.create(Document.prototype);
  expect(emit_declare(document)).toBe('declare ');
});
