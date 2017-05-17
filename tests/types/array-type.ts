import {create_array_type, print, string_type} from '../index';

it('should return correctly', () => {
  expect(print(
    create_array_type({
      type: string_type,
    }),
  )).toMatchSnapshot();
});
