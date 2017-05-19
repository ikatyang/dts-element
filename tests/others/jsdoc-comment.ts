import * as dts from '../index';

it('should return correctly with text', () => {
  expect(dts.emit(
    dts.create_jsdoc_comment({
      text: 'test 1\n\ntest 2',
    }),
  )).toMatchSnapshot();
});
