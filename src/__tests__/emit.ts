import * as ts from 'typescript';
import { create_multi_line_comment } from '../comments/multi-line-comment';
import { create_class_declaration } from '../declarations/class-declaration';
import { emit } from '../emit';
import { create_top_level_element } from '../others/top-level-element';
import { create_general_type } from '../types/general-type';

const top_level_element = create_top_level_element({
  members: [
    create_multi_line_comment({
      text: `hello\n\nworld`,
      align: true,
      prefix: '~ ',
    }),
    create_class_declaration({
      name: 'AAA',
      extends: create_general_type({
        name: 'SomethingElse',
      }),
    }),
  ],
});

it('should return correctly', () => {
  expect(JSON.stringify(emit(top_level_element))).toMatchSnapshot();
});

it('should return correctly with element = array', () => {
  expect(JSON.stringify(emit(top_level_element.members))).toMatchSnapshot();
});

it('should return correctly with removeComments', () => {
  expect(
    JSON.stringify(
      emit(top_level_element, {
        removeComments: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with newLine', () => {
  expect(
    JSON.stringify(
      emit(top_level_element, {
        newLine: ts.NewLineKind.CarriageReturnLineFeed,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with removeComments and newLine', () => {
  expect(
    JSON.stringify(
      emit(top_level_element, {
        removeComments: true,
        newLine: ts.NewLineKind.CarriageReturnLineFeed,
      }),
    ),
  ).toMatchSnapshot();
});
