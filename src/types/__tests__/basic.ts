import { BasicType } from '../basic';

describe('#emit()', () => {
  it('should return its name', () => {
    const name = 'test';
    const basic_type = new BasicType({ name });
    expect(basic_type.emit()).toBe(name);
  });
});
