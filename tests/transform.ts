import {transform} from './index';

it('should throw error with element of unexpected kind', () => {
  expect(() => transform({kind: -1})).toThrowError();
});
