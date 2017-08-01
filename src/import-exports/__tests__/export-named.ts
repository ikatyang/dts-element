import { emit } from '../../emit';
import { create_export_member } from '../../members/export-member';
import { create_export_named, is_export_named } from '../export-named';

it('should throw error without from or members', () => {
  expect(() => emit(create_export_named({}))).toThrowError();
});

it('should return correctly with from', () => {
  expect(
    emit(
      create_export_named({
        from: 'path/to/somewhere',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with members', () => {
  expect(
    emit(
      create_export_named({
        members: [create_export_member({ name: 'abc' })],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with members, from', () => {
  expect(
    emit(
      create_export_named({
        members: [create_export_member({ name: 'abc' })],
        from: 'path/to/somewhere',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_export_named', () => {
  it('should return correctly', () => {
    const element = create_export_named({
      from: 'path/to/somewhere',
    });
    expect(is_export_named(element)).toBe(true);
  });
});
