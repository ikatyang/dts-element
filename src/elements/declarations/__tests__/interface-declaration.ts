jest.unmock('../interface-declaration');

import {InterfaceDeclaration} from '../interface-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
