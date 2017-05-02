jest.unmock('../export-equal');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ExportEqual} from '../export-equal';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    expect(new ExportEqual({value: new VariableDeclaration({name})}).emit()).toBe(`export = ${name};`);
  });
});
