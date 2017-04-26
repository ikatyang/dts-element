jest.unmock('../basic');

import {BasicType} from '../basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    const basic_type = new BasicType({name});
    expect(basic_type.emit()).toBe(name);
  });
});
