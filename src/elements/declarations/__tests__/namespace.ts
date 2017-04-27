jest.unmock('../namespace');

import {NamespaceDeclaration} from '../namespace';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new NamespaceDeclaration({name: 'A', children: [
      new NamespaceDeclaration({name: 'B', children: [new VariableDeclaration({name: 'b'})]}),
      new NamespaceDeclaration({name: 'C', children: [new VariableDeclaration({name: 'c'})]}),
    ]}).emit()).toMatchSnapshot();
  });
});
