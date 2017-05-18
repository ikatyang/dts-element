import * as dts from '../index';

it('should return correctly with owned (VariableDeclaration)', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_variable_declaration({
        name: 'a',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (VariableDeclaration), optional, private, readonly', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_variable_declaration({
        name: 'a',
      }),
      optional: true,
      readonly: true,
      private: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (VariableDeclaration), optional, protected, static', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_variable_declaration({
        name: 'a',
      }),
      optional: true,
      protected: true,
      static: true,
    }),
  )).toMatchSnapshot();
});

it('should throw error with owned (FunctionDeclaration with undefined name)', () => {
  expect(() => dts.emit(
    dts.create_class_member({
      owned: dts.create_function_declaration({
        name: undefined,
      }),
    }),
  )).toThrowError();
});

it('should return correctly with owned (FunctionDeclaration)', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_function_declaration({
        name: 'fn',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration), optional', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_function_declaration({
        name: 'fn',
      }),
      optional: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration), optional, public, abstract', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_function_declaration({
        name: 'fn',
      }),
      optional: true,
      public: true,
      abstract: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (ConstructorType)', () => {
  expect(dts.emit(
    dts.create_class_member({
      owned: dts.create_constructor_type(),
    }),
  )).toMatchSnapshot();
});

it('should throw error with unexpected kind', () => {
  expect(() => dts.emit(
    dts.create_class_member({
      owned: dts.any_type as any,
    }),
  )).toThrowError();
});
