import { emit } from '../../emit';
import { create_import_member } from '../import-member';

it('should return correctly with name', () => {
  expect(
    emit(
      create_import_member({
        name: 'abc',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, property', () => {
  expect(
    emit(
      create_import_member({
        name: 'abc',
        property: 'xyz',
      }),
    ),
  ).toMatchSnapshot();
});
