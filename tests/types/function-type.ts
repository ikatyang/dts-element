import {
  create_function_type,
  create_generic_declaration,
  create_parameter ,
  print, string_type,
} from '../index';

it('should return correctly', () => {
  expect(print(
    create_function_type(),
  )).toMatchSnapshot();
});

it('should return correctly with generics', () => {
  expect(print(
    create_function_type({
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameters', () => {
  expect(print(
    create_function_type({
      parameters: [
        create_parameter({name: 'a'}),
        create_parameter({name: 'b'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with return', () => {
  expect(print(
    create_function_type({
      return: string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with generics, parameters, return', () => {
  expect(print(
    create_function_type({
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
      parameters: [
        create_parameter({name: 'a'}),
        create_parameter({name: 'b'}),
      ],
      return: string_type,
    }),
  )).toMatchSnapshot();
});
