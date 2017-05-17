import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_keyof_type({
      type: dts.create_generic_type({name: 'T'}),
    }),
  )).toMatchSnapshot();
});
