jest.unmock('../class-member');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ClassMember} from '../class-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ClassMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
