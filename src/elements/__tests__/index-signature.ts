jest.unmock('../index-signature');

import {IndexSignature} from '../index-signature';
import {BasicType} from '../types/basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'index';
    const kind = 'string';
    const type_name = 'A';
    const type = new BasicType({name: type_name});
    const index_signature = new IndexSignature({name, kind, type, optional: true});
    expect(index_signature.emit()).toBe(`[${name}: ${kind}]?: [BasicType ${type_name}];`);
  });
});
