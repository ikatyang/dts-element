import * as ts from 'typescript';
import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_native_type({
      type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    }),
  )).toMatchSnapshot();
});
