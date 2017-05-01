jest.unmock('../export-default');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {ExportDefault} from '../export-default';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    expect(new ExportDefault({
      value: new VariableDeclaration({name}),
    }).emit()).toBe(`export default ${name};`);
  });
});
