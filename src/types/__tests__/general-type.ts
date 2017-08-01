import { any_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_general_type, is_general_type } from '../general-type';

it('should return correctly with name', () => {
  expect(
    emit(
      create_general_type({
        name: 'Something',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(
    emit(
      create_general_type({
        name: 'Something',
        generics: [any_type, string_type],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, parents (length = 0)', () => {
  expect(
    emit(
      create_general_type({
        name: 'Something',
        parents: [],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, parents (length > 0)', () => {
  expect(
    emit(
      create_general_type({
        name: 'Something',
        parents: ['A', 'B'],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, parents, generics', () => {
  expect(
    emit(
      create_general_type({
        name: 'Something',
        parents: ['A', 'B'],
        generics: [any_type, string_type],
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_general_type', () => {
  it('should return correctly', () => {
    const element = create_general_type({
      name: 'Something',
    });
    expect(is_general_type(element)).toBe(true);
  });
});
