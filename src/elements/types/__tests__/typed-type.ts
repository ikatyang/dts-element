jest.unmock('../typed-type');

import {TypedType} from '../typed-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TypedType({owned: 'Test'}).emit()).toMatchSnapshot();
  });
});
