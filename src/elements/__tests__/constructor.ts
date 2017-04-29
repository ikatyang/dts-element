jest.unmock('../constructor');

import {Constructor} from '../constructor';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new Constructor({parameters: []}).emit()).toMatchSnapshot();
  });
});
