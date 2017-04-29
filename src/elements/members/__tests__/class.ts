jest.unmock('../class');

import {VariableDeclaration} from '../../declarations/variable';
import {ClassMember} from '../class';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ClassMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
