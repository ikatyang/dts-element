jest.unmock('../namespace');

import {NamespaceDeclaration} from '../namespace';

describe('#emit()', () => {
  it('should return formatted namespace', () => {
    const a_namespace = new NamespaceDeclaration({name: 'Test'});
    expect(a_namespace.emit()).toMatchSnapshot();
  });
});
