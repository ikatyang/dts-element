import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_tuple_type({
      types: [dts.string_type, dts.number_type],
    }),
  )).toMatchSnapshot();
});
