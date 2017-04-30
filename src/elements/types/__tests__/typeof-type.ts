jest.unmock('../typeof-type');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {TypeofType} from '../typeof-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    expect(new TypeofType({
      owned: new VariableDeclaration({name}),
    }).emit()).toBe(`(typeof ${name})`);
  });
});
