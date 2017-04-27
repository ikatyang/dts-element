jest.unmock('../interface');

import {InterfaceMember} from '../../members/interface';
import {InterfaceDeclaration} from '../interface';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceDeclaration({
      name: 'A',
      children: [
        new InterfaceMember({owned: new VariableDeclaration({name: 'x'})}),
        new InterfaceMember({owned: new VariableDeclaration({name: 'y'})}),
      ],
    }).emit()).toMatchSnapshot();
  });
});
