import { any_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_generic_declaration } from '../generic-declaration';

it('should return correctly with name', () => {
  expect(
    emit(
      create_generic_declaration({
        name: 'T',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, extends, default', () => {
  expect(
    emit(
      create_generic_declaration({
        name: 'T',
        extends: string_type,
        defalut: any_type,
      }),
    ),
  ).toMatchSnapshot();
});
