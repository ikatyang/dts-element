jest.unmock('../document');

import {NamespaceDeclaration} from '../declarations/namespace';
import {Document} from '../document';

describe('#emit()', () => {
  it('should return correctly', () => {
    const children = [
      new NamespaceDeclaration({name: 'A'}),
      new NamespaceDeclaration({name: 'B'}),
    ];
    const document = new Document({children});
    expect(document.emit()).toBe('[NamespaceDeclaration A]\n[NamespaceDeclaration B]');
  });
});
