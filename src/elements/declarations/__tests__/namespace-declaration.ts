jest.unmock('../namespace-declaration');

import {NamespaceDeclaration} from '../namespace-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new NamespaceDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
