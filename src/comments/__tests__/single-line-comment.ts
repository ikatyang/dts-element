import {emit} from '../../emit';
import {create_single_line_comment} from '../single-line-comment';

it('should return correctly with text', () => {
  expect(emit(
    create_single_line_comment({
      text: 'test 1\ntest 2',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with text, prefix', () => {
  expect(emit(
    create_single_line_comment({
      text: 'test 1\ntest 2',
      prefix: '~',
    }),
  )).toMatchSnapshot();
});
