jest.unmock('../document');

import {NamespaceDeclaration} from '../declarations/namespace';
import {Document} from '../document';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name_a = 'A';
    const name_b = 'B';
    const children = [
      new NamespaceDeclaration({name: name_a}),
      new NamespaceDeclaration({name: name_b}),
    ];
    const document = new Document({children});
    expect(document.emit()).toBe(`[NamespaceDeclaration ${name_a}]\n[NamespaceDeclaration ${name_b}]`);
  });
});
