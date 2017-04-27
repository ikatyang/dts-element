jest.unmock('../function');

import {FunctionDeclaration} from '../function';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new FunctionDeclaration({name: 'func'}).emit()).toMatchSnapshot();
  });
});
