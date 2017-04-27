jest.unmock('../interface');

import {VariableDeclaration} from '../../declarations/variable';
import {InterfaceMember} from '../interface';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceMember({
      owned: new VariableDeclaration({name: 'x'}),
      readonly: true,
    }).emit()).toMatchSnapshot();
  });
});
