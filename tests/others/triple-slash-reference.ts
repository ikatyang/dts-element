import * as dts from '../index';

it('should return correctly with path', () => {
  expect(dts.emit(
    dts.create_triple_slash_reference({
      path: 'path/to/somewhere',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with types', () => {
  expect(dts.emit(
    dts.create_triple_slash_reference({
      types: 'some-module',
    }),
  )).toMatchSnapshot();
});
