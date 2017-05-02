jest.unmock('../import-default');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ImportDefault} from '../import-default';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    const from = '../../example';
    expect(new ImportDefault({from, value: new VariableDeclaration({name}),
    }).emit()).toBe(`import ${name} from "${from}";`);
  });
});
