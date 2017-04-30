jest.unmock('../generic-type');

import {GenericType} from '../generic-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new GenericType({name: 'T'}).emit()).toMatchSnapshot();
  });
});
