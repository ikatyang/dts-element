import * as ts from 'typescript';
import { emit } from '../../emit';
import { create_native_type, is_native_type } from '../native-type';

it('should return correctly', () => {
  expect(
    emit(
      create_native_type({
        type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_native_type', () => {
  it('should return correctly', () => {
    const element = create_native_type({
      type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    });
    expect(is_native_type(element)).toBe(true);
  });
});
