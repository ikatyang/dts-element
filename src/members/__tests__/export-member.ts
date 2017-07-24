import { emit } from '../../emit';
import { create_export_member } from '../export-member';

it('should return correctly with name', () => {
  expect(
    emit(
      create_export_member({
        name: 'abc',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, property', () => {
  expect(
    emit(
      create_export_member({
        name: 'abc',
        property: 'xyz',
      }),
    ),
  ).toMatchSnapshot();
});
