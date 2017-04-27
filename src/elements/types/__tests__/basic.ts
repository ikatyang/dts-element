jest.unmock('../basic');

import {BasicType} from '../basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new BasicType({name: 'Test'}).emit()).toMatchSnapshot();
  });
});
