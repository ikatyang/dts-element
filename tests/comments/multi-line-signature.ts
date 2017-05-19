import * as dts from '../index';

it('should return correctly with text', () => {
  expect(dts.emit(
    dts.create_multi_line_comment({
      text: 'test 1\ntest 2',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with text, align', () => {
  expect(dts.emit(
    dts.create_multi_line_comment({
      text: 'test 1\ntest 2',
      align: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with text, prefix', () => {
  expect(dts.emit(
    dts.create_multi_line_comment({
      text: 'test 1\ntest 2',
      prefix: '~',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with text, align, prefix', () => {
  expect(dts.emit(
    dts.create_multi_line_comment({
      text: 'test 1\ntest 2',
      align: true,
      prefix: '~',
    }),
  )).toMatchSnapshot();
});
