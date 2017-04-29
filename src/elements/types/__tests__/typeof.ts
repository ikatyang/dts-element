jest.unmock('../typeof');

import {VariableDeclaration} from '../../declarations/variable';
import {TypeofType} from '../typeof';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    expect(new TypeofType({
      owned: new VariableDeclaration({name}),
    }).emit()).toBe(`typeof ${name}`);
  });
});
