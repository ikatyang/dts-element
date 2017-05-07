jest.unmock('../is-primitive');

import {is_primitive} from '../is-primitive';

it('should return correctly', () => {
  expect(is_primitive(null)).toBe(true);
  expect(is_primitive(1)).toBe(true);
  expect(is_primitive('')).toBe(true);
  expect(is_primitive(true)).toBe(true);
  expect(is_primitive([])).toBe(false);
  expect(is_primitive({})).toBe(false);
});
