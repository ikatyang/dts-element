import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_general_type({
      name: 'Something',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(dts.emit(
    dts.create_general_type({
      name: 'Something',
      generics: [
        dts.any_type,
        dts.string_type,
      ],
    }),
  )).toMatchSnapshot();
});
