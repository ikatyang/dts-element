import {create_generic_declaration} from '../../declarations/generic-declaration';
import {emit} from '../../emit';
import {create_generic_type} from '../generic-type';

it('should return correctly with name (string)', () => {
  expect(emit(
    create_generic_type({
      name: 'T',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (GenericDeclaration)', () => {
  expect(emit(
    create_generic_type({
      name: create_generic_declaration({name: 'T'}),
    }),
  )).toMatchSnapshot();
});
