import { emit } from '../../emit';
import {
  create_multi_line_comment,
  is_multi_line_comment,
} from '../multi-line-comment';

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

describe('is_multi_line_comment', () => {
  it('should return correctly', () => {
    const element = create_multi_line_comment({
      text: 'test 1\ntest 2',
    });
    expect(is_multi_line_comment(element)).toBe(true);
  });
});
