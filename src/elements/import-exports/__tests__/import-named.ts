jest.unmock('../import-named');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ImportMember} from '../../members/import-member';
import {ImportNamed} from '../import-named';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ImportNamed({from: 'path/to/example', members: [
      new ImportMember({owned: new VariableDeclaration({name: 'a'})}),
      new ImportMember({owned: new VariableDeclaration({name: 'b'})}),
    ]}).emit()).toMatchSnapshot();
  });
});
