jest.unmock('../type');

import {TypeDeclaration} from '../type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TypeDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
