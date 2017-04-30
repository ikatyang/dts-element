jest.unmock('../type-declaration');

import {TypeDeclaration} from '../type-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TypeDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
