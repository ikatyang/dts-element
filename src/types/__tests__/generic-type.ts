import {create_generic_declaration} from '../../declarations/generic-declaration';
import {emit} from '../../emit';
import {create_generic_type} from '../generic-type';

it('should return correctly with name', () => {
  expect(emit(
    create_generic_type({
      name: 'T',
    }),
  )).toMatchSnapshot();
});
