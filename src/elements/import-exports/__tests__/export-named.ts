jest.unmock('../export-named');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ExportMember} from '../../members/export-member';
import {ExportNamed} from '../export-named';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ExportNamed({members: [
      new ExportMember({owned: new VariableDeclaration({name: 'a'})}),
      new ExportMember({owned: new VariableDeclaration({name: 'b'})}),
    ]}).emit()).toMatchSnapshot();
  });
});
