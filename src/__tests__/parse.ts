import * as ts from 'typescript';
import {emit} from '../emit';
import {parse, parse_native} from '../parse';

const code = `
/// <reference path="some-path" />
/// <reference types="some-types" />

declare var v_var;
declare let v_let;
declare const v_const;

declare const v_any: any;
declare const v_boolean: boolean;
declare const v_never: never;
declare const v_null: null;
declare const v_number: number;
declare const v_object: object;
declare const v_string: string;
declare const v_symbol: symbol;
declare const v_this: this;
declare const v_undefined: undefined;
declare const v_void: void;
`;

it('should return correctly', () => {
  expect(emit(parse(code))).toMatchSnapshot();
});

it('should throw error with unexpected kind', () => {
  expect(() => parse_native(ts.createToken(-1))).toThrowError();
});
