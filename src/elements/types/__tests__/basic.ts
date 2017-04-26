jest.unmock('../basic');

import {BasicType} from '../basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    expect(new BasicType({name}).emit()).toBe(name);
  });
});
