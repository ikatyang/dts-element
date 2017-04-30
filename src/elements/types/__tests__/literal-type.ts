jest.unmock('../literal-type');

import {LiteralType} from '../literal-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new LiteralType({value: 'some-string'}).emit()).toMatchSnapshot();
  });
});
