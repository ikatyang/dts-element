jest.unmock('../function-declaration');

import {FunctionDeclaration} from '../function-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new FunctionDeclaration({name: 'func'}).emit()).toMatchSnapshot();
  });
});
