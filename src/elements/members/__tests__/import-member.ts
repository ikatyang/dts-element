jest.unmock('../import-member');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ImportMember} from '../import-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ImportMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
