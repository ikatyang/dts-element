import {any_type, string_type} from '../../constants';
import {create_type_declaration} from '../../declarations/type-declaration';
import {emit} from '../../emit';
import {create_typed_type} from '../typed-type';

it('should return correctly with name (string)', () => {
  expect(emit(
    create_typed_type({
      name: 'Something',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (TypeDeclaration)', () => {
  expect(emit(
    create_typed_type({
      name: create_type_declaration({
        name: 'Something',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(emit(
    create_typed_type({
      name: 'Something',
      generics: [
        any_type,
        string_type,
      ],
    }),
  )).toMatchSnapshot();
});
