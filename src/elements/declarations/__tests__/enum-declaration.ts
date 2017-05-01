jest.unmock('../enum-declaration');

import {EnumDeclaration} from '../enum-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new EnumDeclaration({name: 'Flag'}).emit()).toMatchSnapshot();
  });
});
