jest.unmock('../namespace-declaration');

import {NamespaceDeclaration} from '../namespace-declaration';
import {VariableDeclaration} from '../variable-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new NamespaceDeclaration({name: 'A', children: [
      new NamespaceDeclaration({name: 'B', children: [new VariableDeclaration({name: 'b'})]}),
      new NamespaceDeclaration({name: 'C', children: [new VariableDeclaration({name: 'c'})]}),
    ]}).emit()).toMatchSnapshot();
  });
});
