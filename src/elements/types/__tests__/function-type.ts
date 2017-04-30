jest.unmock('../function-type');

import {FunctionType} from '../function-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new FunctionType({parameters: []}).emit()).toMatchSnapshot();
  });
});
