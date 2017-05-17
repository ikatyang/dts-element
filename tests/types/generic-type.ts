import {create_generic_declaration, create_generic_type, print} from '../index';

it('should return correctly with name (string)', () => {
  expect(print(
    create_generic_type({
      name: 'T',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (GenericDeclaration)', () => {
  expect(print(
    create_generic_type({
      name: create_generic_declaration({name: 'T'}),
    }),
  )).toMatchSnapshot();
});
