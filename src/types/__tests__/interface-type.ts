import {any_type, string_type} from '../../constants';
import {create_interface_declaration} from '../../declarations/interface-declaration';
import {emit} from '../../emit';
import {create_interface_type} from '../interface-type';

it('should return correctly with name', () => {
  expect(emit(
    create_interface_type({
      name: 'Something',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(emit(
    create_interface_type({
      name: 'Something',
      generics: [
        any_type,
        string_type,
      ],
    }),
  )).toMatchSnapshot();
});
