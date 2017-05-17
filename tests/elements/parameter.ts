import {create_parameter, print, string_type} from '../index';

it('should return correctly with name', () => {
  expect(print(
    create_parameter({
      name: 'a',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, rest', () => {
  expect(print(
    create_parameter({
      name: 'a',
      rest: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type, optional', () => {
  expect(print(
    create_parameter({
      name: 'a',
      type: string_type,
      optional: true,
    }),
  )).toMatchSnapshot();
});
