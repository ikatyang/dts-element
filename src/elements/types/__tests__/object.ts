jest.unmock('../object');

import {VariableDeclaration} from '../../declarations/variable';
import {ObjectMember} from '../../members/object';
import {ObjectType} from '../object';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ObjectType({children: [
      new ObjectMember({owned: new VariableDeclaration({name: 'x'})}),
      new ObjectMember({owned: new VariableDeclaration({name: 'y'})}),
    ]}).emit()).toMatchSnapshot();
  });
});
