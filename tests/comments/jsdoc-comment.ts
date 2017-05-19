import * as dts from '../index';

it('should return correctly with text', () => {
  expect(dts.emit(
    dts.create_jsdoc_comment({
      text: 'test 1\n\ntest 2',
    }),
  )).toMatchSnapshot();
});

describe('add_jsdoc_comment', () => {
  it('should attach jsdoc comment to node correctly', () => {
    expect(dts.emit_native(
      dts.add_jsdoc_comment(
        dts.transform(
          dts.create_class_declaration({
            name: 'SomeClass',
          }),
        ),
        'Line 1\n\nLine 3',
      ),
    )).toMatchSnapshot();
  });
});
