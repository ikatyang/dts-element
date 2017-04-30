jest.unmock('../object-type');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ObjectMember} from '../../members/object-member';
import {ObjectType} from '../object-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ObjectType({members: [
      new ObjectMember({owned: new VariableDeclaration({name: 'x'})}),
      new ObjectMember({owned: new VariableDeclaration({name: 'y'})}),
    ]}).emit()).toMatchSnapshot();
  });
});
