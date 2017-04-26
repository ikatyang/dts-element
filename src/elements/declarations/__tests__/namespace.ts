jest.unmock('../namespace');

import {Document} from '../../document';
import {NamespaceDeclaration} from '../namespace';

describe('#emit()', () => {
  it('should return correctly', () => {
    const a_namespace = new NamespaceDeclaration({name: 'A', children: [
      new NamespaceDeclaration({name: 'B'}),
      new NamespaceDeclaration({name: 'C'}),
    ]});
    expect(a_namespace.emit()).toMatchSnapshot();
  });
});

describe('#_emit()', () => {
  describe('Document', () => {
    const document = Object.create(Document.prototype);
    it('should return correctly', () => {
      const a_namespace = new NamespaceDeclaration({name: 'A', children: [
        new NamespaceDeclaration({name: 'B'}),
        new NamespaceDeclaration({name: 'C'}),
      ]});
      expect(a_namespace._emit(document)).toMatchSnapshot();
    });
  });
});
