import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_sub_type({
      types: [
        dts.any_type,
        dts.string_type,
        dts.number_type,
      ],
    }),
  )).toMatchSnapshot();
});

it('should throw error with types (length < 2)', () => {
  expect(() => dts.emit(
    dts.create_sub_type({
      types: [],
    }),
  )).toThrowError();
});
