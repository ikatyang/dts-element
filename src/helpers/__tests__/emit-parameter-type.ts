jest.unmock('../emit-parameter-type');

import {any_type} from '../../constants';
import {emit_parameter_type} from '../emit-parameter-type';

it('should return emitted type while flag is not rest', () => {
  expect(emit_parameter_type(any_type, 'rest', null)).toMatchSnapshot();
});

it('should return emitted type wrapped with ArrayType while flag is rest', () => {
  expect(emit_parameter_type(any_type, null, null)).toMatchSnapshot();
});