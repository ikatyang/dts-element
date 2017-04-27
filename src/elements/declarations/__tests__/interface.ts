jest.unmock('../interface');

import {GenericType} from '../../types/generic';
import {InterfaceDeclaration} from '../interface';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceDeclaration({
      name: 'A',
      generics: [
        new GenericType({name: 'T'}),
        new GenericType({name: 'U'}),
      ],
      children: [
        new VariableDeclaration({name: 'x'}),
        new VariableDeclaration({name: 'y'}),
      ],
    }).emit()).toMatchSnapshot();
  });
});
