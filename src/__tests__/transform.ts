import {create_multi_line_comment} from '../comments/multi-line-comment';
import {create_single_line_comment} from '../comments/single-line-comment';
import {create_class_declaration} from '../declarations/class-declaration';
import {emit_native} from '../emit';
import {transform} from '../transform';

it('should throw error with element of unexpected kind', () => {
  expect(() => transform({kind: -1})).toThrowError();
});

it('should return node with jsdoc-attached node while element.jsdoc is not undefined', () => {
  expect(emit_native(
    transform(
      create_class_declaration({
        name: 'SomeClass',
        jsdoc: 'Line 1\n\nLine 2',
      }),
    ),
  )).toMatchSnapshot();
});

it('should return node with comments-attached node while element.comments is not undefined', () => {
  expect(emit_native(
    transform(
      create_class_declaration({
        name: 'SomeClass',
        comments: [
          create_single_line_comment({
            text: `single 1\n\nsingle 2`,
          }),
          create_multi_line_comment({
            text: `multi 1\n\nmulti 2`,
          }),
        ],
      }),
    ),
  )).toMatchSnapshot();
});
