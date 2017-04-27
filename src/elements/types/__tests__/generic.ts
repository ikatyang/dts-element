jest.unmock('../generic');

import {GenericType} from '../generic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new GenericType({name: 'T'}).emit()).toMatchSnapshot();
  });
});
