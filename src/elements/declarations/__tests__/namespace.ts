jest.unmock('../namespace');

import {NamespaceDeclaration} from '../namespace';

describe('#emit()', () => {
  it('should return formatted namespace', () => {
    const a_namespace = new NamespaceDeclaration({name: 'A', children: [
      new NamespaceDeclaration({name: 'B'}),
      new NamespaceDeclaration({name: 'C'}),
    ]});
    expect(a_namespace.emit()).toMatchSnapshot();
  });
});
