jest.unmock('../left-pad');

import {left_pad} from '../left-pad';

it('should return correcly', () => {
  const str = '1234';
  const char = '0';
  expect(left_pad(str, str.length + 1, char)).toBe(`${char}${str}`);
});
