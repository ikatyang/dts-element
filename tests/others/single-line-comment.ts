import * as dts from '../index';

it('should return correctly with single-line-text', () => {
  expect(dts.emit(
    dts.create_single_line_comment({
      text: 'test',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with single-line-text, leading_space', () => {
  expect(dts.emit(
    dts.create_single_line_comment({
      text: 'test',
      leading_space: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with multi-line-text', () => {
  expect(dts.emit(
    dts.create_single_line_comment({
      text: 'test 1\ntest 2',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with multi-line-text, leading_space', () => {
  expect(dts.emit(
    dts.create_single_line_comment({
      text: 'test 1\ntest 2',
      leading_space: true,
    }),
  )).toMatchSnapshot();
});
