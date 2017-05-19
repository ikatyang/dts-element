import {any_type, string_type} from '../../constants';
import {create_class_declaration} from '../../declarations/class-declaration';
import {emit} from '../../emit';
import {create_class_type} from '../class-type';

it('should return correctly with name (string)', () => {
  expect(emit(
    create_class_type({
      name: 'Something',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (ClassDeclaration)', () => {
  expect(emit(
    create_class_type({
      name: create_class_declaration({
        name: 'Something',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(emit(
    create_class_type({
      name: 'Something',
      generics: [
        any_type,
        string_type,
      ],
    }),
  )).toMatchSnapshot();
});
