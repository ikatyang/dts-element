jest.unmock('../object');

import {VariableDeclaration} from '../../declarations/variable';
import {ObjectMember} from '../object';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ObjectMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
