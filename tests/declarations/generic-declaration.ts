import {any_type, create_generic_declaration, print, string_type} from '../index';

it('should return correctly with name', () => {
  expect(print(
    create_generic_declaration({
      name: 'T',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, extends, default', () => {
  expect(print(
    create_generic_declaration({
      name: 'T',
      extends: string_type,
      defalut: any_type,
    }),
  )).toMatchSnapshot();
});
