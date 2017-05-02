jest.unmock('../import-named-all');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ImportNamedAll} from '../import-named-all';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    const from = '../../example';
    expect(new ImportNamedAll({from, value: new VariableDeclaration({name}),
    }).emit()).toBe(`import * as ${name} from "${from}";`);
  });
});
