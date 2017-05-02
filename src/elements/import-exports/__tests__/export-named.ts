jest.unmock('../export-named');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ImportExportMember} from '../../members/import-export-member';
import {ExportNamed} from '../export-named';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ExportNamed({members: [
      new ImportExportMember({owned: new VariableDeclaration({name: 'a'})}),
      new ImportExportMember({owned: new VariableDeclaration({name: 'b'})}),
    ]}).emit()).toMatchSnapshot();
  });
});