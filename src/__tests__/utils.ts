import { emit_native } from '../emit';
import { create_general_type } from '../types/general-type';
import {
  create_entity_name,
  create_expression_for_general_type,
  create_property_access,
  create_qualified_name,
} from '../utils';

describe('create_qualified_name()', () => {
  it('should return correcly with names.length >= 2', () => {
    expect(
      emit_native(create_qualified_name(['A', 'B', 'C'])),
    ).toMatchSnapshot();
  });
  it('should throw error with names.length < 2', () => {
    expect(() => emit_native(create_qualified_name([]))).toThrowError();
  });
});

describe('create_entity_name()', () => {
  it('should return correctly with name (string)', () => {
    expect(emit_native(create_entity_name('A'))).toMatchSnapshot();
  });
  it('should return correctly with name (array.length === 1)', () => {
    expect(emit_native(create_entity_name(['A']))).toMatchSnapshot();
  });
  it('should return correctly with name (array.length !== 1)', () => {
    expect(emit_native(create_entity_name(['A', 'B', 'C']))).toMatchSnapshot();
  });
});

describe('create_property_access()', () => {
  it('should return correctly with name (array.length >= 2)', () => {
    expect(
      emit_native(create_property_access(['A', 'B', 'C'])),
    ).toMatchSnapshot();
  });
  it('should thorw error with names (array.length < 2)', () => {
    expect(() => emit_native(create_property_access(['A']))).toThrowError();
  });
});

describe('create_expression_for_general_type()', () => {
  it('should return correctly with element', () => {
    expect(
      emit_native(
        create_expression_for_general_type(
          create_general_type({ name: 'X' }),
          [],
        ),
      ),
    ).toMatchSnapshot();
  });
  it('should return correctly with element (parents.length === 0)', () => {
    expect(
      emit_native(
        create_expression_for_general_type(
          create_general_type({ name: 'X', parents: [] }),
          [],
        ),
      ),
    ).toMatchSnapshot();
  });
  it('should return correctly with element (parents.length > 0)', () => {
    expect(
      emit_native(
        create_expression_for_general_type(
          create_general_type({ name: 'X', parents: ['A', 'B'] }),
          [],
        ),
      ),
    ).toMatchSnapshot();
  });
});
