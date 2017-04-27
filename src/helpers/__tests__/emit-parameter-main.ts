jest.unmock('../emit-parameter-main');

import {emit_parameter_main} from '../emit-parameter-main';

it('should return correctly', () => {
  const name = 'test';
  expect(emit_parameter_main(name, null)).toBe(`[emit-rest]${name}[emit-optional]`);
});
