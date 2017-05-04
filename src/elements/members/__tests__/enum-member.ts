jest.unmock('../enum-member');

import {Stack} from '../../../stack';
import {VariableDeclaration} from '../../declarations/variable-declaration';
import {EnumMember} from '../enum-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    const fn = (): number => 1;
    expect(new EnumMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit(new Stack(), fn)).toMatchSnapshot();
  });
});
