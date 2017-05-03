jest.unmock('../function-declaration');
jest.unmock('../../types/function-type.ts');

import {FunctionDeclaration} from '../function-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new FunctionDeclaration({name: 'func'}).emit()).toMatchSnapshot();
  });
});
