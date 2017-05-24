import {string_type} from '../../constants';
import {create_generic_declaration} from '../../declarations/generic-declaration';
import {create_parameter_declaration} from '../../declarations/parameter-declaration';
import {emit} from '../../emit';
import {create_type_predicate} from '../../others/type-predicate';
import {create_function_type} from '../function-type';

it('should return correctly', () => {
  expect(emit(
    create_function_type(),
  )).toMatchSnapshot();
});

it('should return correctly with generics', () => {
  expect(emit(
    create_function_type({
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameters', () => {
  expect(emit(
    create_function_type({
      parameters: [
        create_parameter_declaration({name: 'a'}),
        create_parameter_declaration({name: 'b'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with return', () => {
  expect(emit(
    create_function_type({
      return: string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameters, return (TypePredicate)', () => {
  const parameter = create_parameter_declaration({
    name: 'a',
  });
  expect(emit(
    create_function_type({
      parameters: [
        parameter,
      ],
      return: create_type_predicate({
        parameter: parameter.name,
        type: string_type,
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with generics, parameters, return', () => {
  expect(emit(
    create_function_type({
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
      parameters: [
        create_parameter_declaration({name: 'a'}),
        create_parameter_declaration({name: 'b'}),
      ],
      return: string_type,
    }),
  )).toMatchSnapshot();
});
