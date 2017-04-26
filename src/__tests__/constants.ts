jest.unmock('../constants');
jest.unmock('../elements/types/basic');

import {
  any_type,
  boolean_type,
  never_type,
  null_type,
  number_type,
  object_type,
  string_type,
  symbol_type,
  this_type,
  undefined_type,
  void_type,
} from '../constants';

test('boolean_type should emit "boolean"', () => {
  expect(boolean_type.emit()).toBe('boolean');
});

test('never_type should emit "never"', () => {
  expect(never_type.emit()).toBe('never');
});

test('null_type should emit "null"', () => {
  expect(null_type.emit()).toBe('null');
});

test('number_type should emit "number"', () => {
  expect(number_type.emit()).toBe('number');
});

test('object_type should emit "object"', () => {
  expect(object_type.emit()).toBe('object');
});

test('string_type should emit "string"', () => {
  expect(string_type.emit()).toBe('string');
});

test('symbol_type should emit "symbol"', () => {
  expect(symbol_type.emit()).toBe('symbol');
});

test('this_type should emit "this"', () => {
  expect(this_type.emit()).toBe('this');
});

test('undefined_type should emit "undefined"', () => {
  expect(undefined_type.emit()).toBe('undefined');
});

test('void_type should emit "void"', () => {
  expect(void_type.emit()).toBe('void');
});
