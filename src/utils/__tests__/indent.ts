jest.unmock('../indent');

import {indent} from '../indent';

it('should return indented string', () => {
  const line = 'line';
  expect(indent(line)).toBe(`  ${line}`);
});
