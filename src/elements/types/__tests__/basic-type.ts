jest.unmock('../basic-type');

import {BasicType} from '../basic-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new BasicType({name: 'Test'}).emit()).toMatchSnapshot();
  });
});
