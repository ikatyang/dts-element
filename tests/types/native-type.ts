import * as ts from 'typescript';
import {create_native_type, print} from '../index';

it('should return correctly', () => {
  expect(print(
    create_native_type({
      type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    }),
  )).toMatchSnapshot();
});
