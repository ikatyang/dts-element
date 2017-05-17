import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_array_type({
      type: dts.string_type,
    }),
  )).toMatchSnapshot();
});
