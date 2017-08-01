import { create_class_declaration } from '../../declarations/class-declaration';
import { create_module_declaration } from '../../declarations/module-declaration';
import { emit } from '../../emit';
import {
  create_top_level_element,
  is_top_level_element,
} from '../top-level-element';
import { create_triple_slash_reference } from '../triple-slash-reference';

it('should return correctly', () => {
  expect(
    emit(
      create_top_level_element({
        members: [
          create_triple_slash_reference({
            path: 'path/to/somewhere',
          }),
          create_module_declaration({
            name: 'something',
          }),
          create_class_declaration({
            name: 'C',
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_top_level_element', () => {
  it('should return correctly', () => {
    const element = create_top_level_element({ members: [] });
    expect(is_top_level_element(element)).toBe(true);
  });
});
