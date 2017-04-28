jest.unmock('../interface');

import {ObjectMember} from '../../members/object';
import {InterfaceDeclaration} from '../interface';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceDeclaration({
      name: 'A',
      children: [
        new ObjectMember({owned: new VariableDeclaration({name: 'x'})}),
        new ObjectMember({owned: new VariableDeclaration({name: 'y'})}),
      ],
    }).emit()).toMatchSnapshot();
  });
});
