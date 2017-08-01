import { create_class_declaration } from '../../declarations/class-declaration';
import { emit, emit_native } from '../../emit';
import { transform } from '../../transform';
import {
  add_jsdoc_comment,
  create_jsdoc_comment,
  is_jsdoc_comment,
} from '../jsdoc-comment';

it('should return correctly with text', () => {
  expect(
    emit(
      create_jsdoc_comment({
        text: 'test 1\n\ntest 2',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_jsdoc_comment', () => {
  it('should return correctly', () => {
    const element = create_jsdoc_comment({
      text: 'test 1\n\ntest 2',
    });
    expect(is_jsdoc_comment(element)).toBe(true);
  });
});

describe('add_jsdoc_comment', () => {
  it('should attach jsdoc comment to node correctly', () => {
    expect(
      emit_native(
        add_jsdoc_comment(
          transform(
            create_class_declaration({
              name: 'SomeClass',
            }),
          ),
          'Line 1\n\nLine 3',
        ),
      ),
    ).toMatchSnapshot();
  });
});
