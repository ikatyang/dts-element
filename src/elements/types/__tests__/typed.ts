jest.unmock('../typed');

import {TypedType} from '../typed';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TypedType({owned: 'Test'}).emit()).toMatchSnapshot();
  });
});
