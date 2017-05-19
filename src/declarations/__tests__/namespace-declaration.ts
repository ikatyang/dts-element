import {emit} from '../../emit';
import {create_function_declaration} from '../function-declaration';
import {create_namespace_declaration} from '../namespace-declaration';
import {create_variable_declaration} from '../variable-declaration';

it('should return correctly with name', () => {
  expect(emit(
    create_namespace_declaration({
      name: 'N',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (hierarchy)', () => {
  expect(emit(
    create_namespace_declaration({
      name: 'A.B.C',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(emit(
    create_namespace_declaration({
      name: 'N',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, children', () => {
  expect(emit(
    create_namespace_declaration({
      name: 'N',
      members: [
        create_variable_declaration({
          name: 'a',
        }),
        create_function_declaration({
          name: 'b',
        }),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, children', () => {
  expect(emit(
    create_namespace_declaration({
      name: 'N',
      export: true,
      members: [
        create_variable_declaration({
          name: 'a',
        }),
        create_function_declaration({
          name: 'b',
        }),
      ],
    }),
  )).toMatchSnapshot();
});
