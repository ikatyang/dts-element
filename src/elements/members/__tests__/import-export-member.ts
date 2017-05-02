jest.unmock('../import-export-member');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ImportExportMember} from '../import-export-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ImportExportMember({
      owned: new VariableDeclaration({name: 'x'}),
    }).emit()).toMatchSnapshot();
  });
});
