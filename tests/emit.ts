import * as ts from 'typescript';
import * as dts from './index';

const top_level_element = dts.create_top_level_element({
  members: [
    dts.create_multi_line_comment({
      text: `hello\n\nworld`,
      align: true,
      prefix: '~ ',
    }),
    dts.create_class_declaration({
      name: 'AAA',
      extends: dts.create_general_type({
        name: 'SomethingElse',
      }),
    }),
  ],
});

it('should return correctly', () => {
  expect(JSON.stringify(dts.emit(top_level_element))).toMatchSnapshot();
});

it('should return correctly with removeComments', () => {
  expect(JSON.stringify(dts.emit(top_level_element, {
    removeComments: true,
  }))).toMatchSnapshot();
});

it('should return correctly with newLine', () => {
  expect(JSON.stringify(dts.emit(top_level_element, {
    newLine: ts.NewLineKind.CarriageReturnLineFeed,
  }))).toMatchSnapshot();
});

it('should return correctly with removeComments and newLine', () => {
  expect(JSON.stringify(dts.emit(top_level_element, {
    removeComments: true,
    newLine: ts.NewLineKind.CarriageReturnLineFeed,
  }))).toMatchSnapshot();
});
