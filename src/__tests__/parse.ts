import * as ts from 'typescript';
import {emit} from '../emit';
import {parse, parse_native} from '../parse';

const code = `
/// <reference path="some-path" />
/// <reference types="some-types" />
`;

it('should return correctly', () => {
  expect(emit(parse(code))).toMatchSnapshot();
});

it('should throw error with unexpected kind', () => {
  expect(() => parse_native(ts.createToken(-1))).toThrowError();
});
