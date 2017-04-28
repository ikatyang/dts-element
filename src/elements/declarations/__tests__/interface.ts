jest.unmock('../interface');

import {InterfaceDeclaration} from '../interface';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
