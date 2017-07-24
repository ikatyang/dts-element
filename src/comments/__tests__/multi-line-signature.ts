import { emit } from '../../emit';
import { create_multi_line_comment } from '../multi-line-comment';

it('should return correctly with text', () => {
  expect(
    emit(
      create_multi_line_comment({
        text: 'test 1\ntest 2',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with text, align', () => {
  expect(
    emit(
      create_multi_line_comment({
        text: 'test 1\ntest 2',
        align: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with text, prefix', () => {
  expect(
    emit(
      create_multi_line_comment({
        text: 'test 1\ntest 2',
        prefix: '~',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with text, align, prefix', () => {
  expect(
    emit(
      create_multi_line_comment({
        text: 'test 1\ntest 2',
        align: true,
        prefix: '~',
      }),
    ),
  ).toMatchSnapshot();
});
