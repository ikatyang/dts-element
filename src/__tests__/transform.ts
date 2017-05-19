import {create_class_declaration} from '../declarations/class-declaration';
import {emit_native} from '../emit';
import {transform} from '../transform';

it('should throw error with element of unexpected kind', () => {
  expect(() => transform({kind: -1})).toThrowError();
});

it('should return node with jsdoc-attached node while element.jsdoc is not undefined', () => {
  expect(emit_native(
    transform(
      create_class_declaration({
        name: 'SomeClass',
        jsdoc: 'Line 1\n\nLine 2',
      }),
    ),
  )).toMatchSnapshot();
});
