jest.unmock('../export-member');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ExportMember} from '../export-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ExportMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
