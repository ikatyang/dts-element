jest.unmock('../document');

import {NamespaceDeclaration} from '../declarations/namespace';
import {Document} from '../document';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new Document({children: [
      new NamespaceDeclaration({name: 'A'}),
      new NamespaceDeclaration({name: 'B'}),
    ]}).emit()).toMatchSnapshot();
  });
});
