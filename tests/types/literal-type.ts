import * as dts from '../index';

it('should return correctly with boolean', () => {
  expect(dts.emit(
    dts.create_literal_type({
      value: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with number', () => {
  expect(dts.emit(
    dts.create_literal_type({
      value: 1,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with string', () => {
  expect(dts.emit(
    dts.create_literal_type({
      value: 'a',
    }),
  )).toMatchSnapshot();
});
