import {create_enum_declaration} from '../../declarations/enum-declaration';
import {emit} from '../../emit';
import {create_enum_type} from '../enum-type';

it('should return correctly with name (string)', () => {
  expect(emit(
    create_enum_type({
      name: 'E',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (EnumDeclaration)', () => {
  expect(emit(
    create_enum_type({
      name: create_enum_declaration({name: 'E'}),
    }),
  )).toMatchSnapshot();
});
