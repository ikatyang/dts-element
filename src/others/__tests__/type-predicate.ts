import {number_type, string_type, this_type} from '../../constants';
import {emit} from '../../emit';
import {create_type_predicate} from '../type-predicate';

it('should return correctly with parameter (ParameterDeclaration), type', () => {
  expect(emit(
    create_type_predicate({
      parameter: 'key',
      type: string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter (this_type), type', () => {
  expect(emit(
    create_type_predicate({
      parameter: this_type,
      type: number_type,
    }),
  )).toMatchSnapshot();
});

it('should throw error with parameter (not ParameterDeclaration or this_type)', () => {
  expect(() => emit(
    create_type_predicate({
      parameter: string_type,
      type: number_type,
    }),
  )).toThrowError();
});
