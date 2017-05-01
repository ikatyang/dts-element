jest.unmock('../literal-type');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {LiteralType} from '../literal-type';

describe('#emit()', () => {
  it('should return correctly while value is Declaration', () => {
    const name = 'test';
    const value = new VariableDeclaration({name});
    expect(new LiteralType({value}).emit()).toBe(`"${name}"`);
  });
  it('should return correctly while value is not Declaration', () => {
    const value = 'something';
    expect(new LiteralType({value}).emit()).toBe(`"${value}"`);
  });
});
