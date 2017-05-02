jest.unmock('../type-assertion');

import {Parameter} from '../parameter';
import {TypeAssertion} from '../type-assertion';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TypeAssertion({
      parameter: new Parameter({name: 'param'}),
    }).emit()).toMatchSnapshot();
  });
});
