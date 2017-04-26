jest.unmock('../interface');

import {GenericType} from '../../types/generic';
import {InterfaceDeclaration} from '../interface';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    const a_interface = new InterfaceDeclaration({
      name: 'A',
      generics: [
        new GenericType({name: 'T'}),
        new GenericType({name: 'U'}),
      ],
      children: [
        new VariableDeclaration({name: 'x'}),
        new VariableDeclaration({name: 'y'}),
      ],
    });
    expect(a_interface.emit()).toMatchSnapshot();
  });
});
