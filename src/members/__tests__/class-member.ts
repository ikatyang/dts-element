import { any_type } from '../../constants';
import { create_function_declaration } from '../../declarations/function-declaration';
import { create_variable_declaration } from '../../declarations/variable-declaration';
import { emit } from '../../emit';
import { create_constructor_type } from '../../types/constructor-type';
import { create_class_member } from '../class-member';

it('should return correctly with owned (VariableDeclaration)', () => {
  expect(
    emit(
      create_class_member({
        owned: create_variable_declaration({
          name: 'a',
        }),
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with owned (VariableDeclaration), optional, private, readonly', () => {
  expect(
    emit(
      create_class_member({
        owned: create_variable_declaration({
          name: 'a',
        }),
        optional: true,
        readonly: true,
        private: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with owned (VariableDeclaration), optional, protected, static', () => {
  expect(
    emit(
      create_class_member({
        owned: create_variable_declaration({
          name: 'a',
        }),
        optional: true,
        protected: true,
        static: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should throw error with owned (FunctionDeclaration with undefined name)', () => {
  expect(() =>
    emit(
      create_class_member({
        owned: create_function_declaration({
          name: undefined,
        }),
      }),
    ),
  ).toThrowError();
});

it('should return correctly with owned (FunctionDeclaration)', () => {
  expect(
    emit(
      create_class_member({
        owned: create_function_declaration({
          name: 'fn',
        }),
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration), optional', () => {
  expect(
    emit(
      create_class_member({
        owned: create_function_declaration({
          name: 'fn',
        }),
        optional: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration), optional, public, abstract', () => {
  expect(
    emit(
      create_class_member({
        owned: create_function_declaration({
          name: 'fn',
        }),
        optional: true,
        public: true,
        abstract: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with owned (ConstructorType)', () => {
  expect(
    emit(
      create_class_member({
        owned: create_constructor_type(),
      }),
    ),
  ).toMatchSnapshot();
});

it('should throw error with unexpected kind', () => {
  expect(() =>
    emit(
      create_class_member({
        owned: any_type as any,
      }),
    ),
  ).toThrowError();
});
