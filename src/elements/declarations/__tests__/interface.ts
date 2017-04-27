jest.unmock('../interface');

import {InterfaceDeclaration} from '../interface';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceDeclaration({
      name: 'A',
      children: [
        new VariableDeclaration({name: 'x'}),
        new VariableDeclaration({name: 'y'}),
      ],
    }).emit()).toMatchSnapshot();
  });
});
