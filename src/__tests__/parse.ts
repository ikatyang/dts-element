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

declare const v_array: any[];
declare const v_constructor: new () => any;
declare const v_function: () => any;
declare const v_function_predicate: () => this is string;
declare const v_general: X.Y.Z<string>;
declare const v_intersection: string & number;
declare const v_keyof: keyof X;
declare const v_literal_true: true;
declare const v_literal_false: false;
declare const v_literal_number: 123;
declare const v_literal_string: 'str';
declare const v_mapped: {
  [T in keyof X]: any;
};
declare const v_mapped_readonly: {
  readonly [T in keyof X]: any;
};
declare const v_mapped_optional: {
  [T in keyof X]?: any;
};
declare const v_object: {
  readonly a?: any;
  b?(): any;
  new (): any;
  (): any;
  readonly [index: number]: any;
};
declare const v_sub: X[any]['abc'][123];
declare const v_tuple: [string, number];
declare const v_typeof: typeof X.Y.Z;
declare const v_union: string | number;

import "path/to/somewhere";
import import_default from "path/to/somewhere";
import import_default1, * as import_namespace1 from "path/to/somewhere";
import * as import_namespace2 from "path/to/somewhere";
import import_default2, {im_0 as im_1, im_2} from "path/to/somewhere";
import {im_3 as im_4, im_5} from "path/to/somewhere";

export default X.Y.Z;
export = A.B.C;
export {ex_0 as ex_1, ex_2};
export as namespace NS;
export * from "path/to/somewhere";
export {ex_3 as ex_4, ex_5} from "path/to/somewhere";

export declare abstract class ABC<T, U> extends XYZ<S, V> {
  constructor();
  method?(): void;
  public method1(): void;
  protected method2(): void;
  private method3(): void;
  public abstract method4(): void;
  property?: string;
  public property1: string;
  protected property2: string;
  private property3: string;
  public abstract property4: string;
}

// export enum Kind {
//   A,
//   B = 123,
//   C,
// }

// declare global {
//   interface String {
//     toXYZ(): any;
//   }
// }

// declare namespace NS {
//   const ns: any;
// }

// type TP = string;
`;

it('should return correctly', () => {
  expect(emit(parse(code))).toMatchSnapshot();
});

it('should throw error with unexpected kind', () => {
  expect(() => parse_native(ts.createToken(-1))).toThrowError();
});