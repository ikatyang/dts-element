jest.unmock('../generic');

import {GenericType} from '../generic';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'T';
    expect(new GenericType({name}).emit()).toBe(name);
  });
});
