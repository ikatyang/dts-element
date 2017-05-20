import {emit} from '../../emit';
import {create_function_declaration} from '../function-declaration';
import {create_module_declaration} from '../module-declaration';
import {create_variable_declaration} from '../variable-declaration';

it('should return correctly with name', () => {
  expect(emit(
    create_module_declaration({
      name: 'M',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, members', () => {
  expect(emit(
    create_module_declaration({
      name: 'M',
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
