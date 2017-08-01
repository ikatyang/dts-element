import { emit } from '../../emit';
import {
  create_single_line_comment,
  is_single_line_comment,
} from '../single-line-comment';

it('should return correctly with text', () => {
  expect(
    emit(
      create_single_line_comment({
        text: 'test 1\ntest 2',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with text, prefix', () => {
  expect(
    emit(
      create_single_line_comment({
        text: 'test 1\ntest 2',
        prefix: '~',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_single_line_comment', () => {
  it('should return correctly', () => {
    const element = create_single_line_comment({
      text: 'test 1\ntest 2',
    });
    expect(is_single_line_comment(element)).toBe(true);
  });
});
