jest.unmock('../function-type');

import {any_type} from '../../../constants';
import {FunctionType} from '../function-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new FunctionType({return: any_type}).emit()).toMatchSnapshot();
  });
});
