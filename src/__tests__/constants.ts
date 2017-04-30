jest.unmock('../constants');
jest.unmock('../elements/types/basic-type');

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

test('any_type.emit() should return correctly', () => {
  expect(any_type.emit()).toMatchSnapshot();
});

test('boolean_type.emit() should return correctly', () => {
  expect(boolean_type.emit()).toMatchSnapshot();
});

test('never_type.emit() should return correctly', () => {
  expect(never_type.emit()).toMatchSnapshot();
});

test('null_type.emit() should return correctly', () => {
  expect(null_type.emit()).toMatchSnapshot();
});

test('number_type.emit() should return correctly', () => {
  expect(number_type.emit()).toMatchSnapshot();
});

test('object_type.emit() should return correctly', () => {
  expect(object_type.emit()).toMatchSnapshot();
});

test('string_type.emit() should return correctly', () => {
  expect(string_type.emit()).toMatchSnapshot();
});

test('symbol_type.emit() should return correctly', () => {
  expect(symbol_type.emit()).toMatchSnapshot();
});

test('this_type.emit() should return correctly', () => {
  expect(this_type.emit()).toMatchSnapshot();
});

test('undefined_type.emit() should return correctly', () => {
  expect(undefined_type.emit()).toMatchSnapshot();
});

test('void_type.emit() should return correctly', () => {
  expect(void_type.emit()).toMatchSnapshot();
});
