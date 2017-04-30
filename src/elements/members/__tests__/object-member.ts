jest.unmock('../object-member');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ObjectMember} from '../object-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ObjectMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
