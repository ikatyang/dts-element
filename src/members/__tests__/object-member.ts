import {any_type} from '../../constants';
import {create_function_declaration} from '../../declarations/function-declaration';
import {create_variable_declaration} from '../../declarations/variable-declaration';
import {emit} from '../../emit';
import {create_constructor_type} from '../../types/constructor-type';
import {create_object_member} from '../object-member';

it('should return correctly with owned (VariableDeclaration)', () => {
  expect(emit(
    create_object_member({
      owned: create_variable_declaration({
        name: 'a',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (VariableDeclaration), optional, readonly', () => {
  expect(emit(
    create_object_member({
      owned: create_variable_declaration({
        name: 'a',
      }),
      optional: true,
      readonly: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration with undefined name)', () => {
  expect(emit(
    create_object_member({
      owned: create_function_declaration({
        name: undefined,
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration with name)', () => {
  expect(emit(
    create_object_member({
      owned: create_function_declaration({
        name: 'fn',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (FunctionDeclaration), optional', () => {
  expect(emit(
    create_object_member({
      owned: create_function_declaration({
        name: 'fn',
      }),
      optional: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with owned (ConstructorType)', () => {
  expect(emit(
    create_object_member({
      owned: create_constructor_type(),
    }),
  )).toMatchSnapshot();
});

it('should throw error with unexpected kind', () => {
  expect(() => emit(
    create_object_member({
      owned: any_type as any,
    }),
  )).toThrowError();
});
