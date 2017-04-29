jest.unmock('../function');

import {FunctionType} from '../function';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new FunctionType({parameters: []}).emit()).toMatchSnapshot();
  });
});
