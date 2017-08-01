import { emit } from '../../emit';
import { create_export_member, is_export_member } from '../export-member';

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

describe('is_export_member', () => {
  it('should return correctly', () => {
    const element = create_export_member({
      name: 'abc',
    });
    expect(is_export_member(element)).toBe(true);
  });
});
