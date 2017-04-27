import {Document} from '../../elements/document';
import {emit_declare} from '../emit-declare';

const invalid = undefined as any; // TODO

it('should return empty string while container is not Document or null', () => {
  expect(emit_declare(invalid)).toBe('');
});

it('should return empty string while container is Document or null', () => {
  const document = Object.create(Document.prototype);
  expect(emit_declare(document)).toBe('declare ');
});
