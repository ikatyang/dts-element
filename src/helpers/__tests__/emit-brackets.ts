jest.unmock('../emit-brackets');

import {BasicType} from '../../elements/types/basic-type';
import {UnionType} from '../../elements/types/union-type';
import {emit_brackets} from '../emit-brackets';

const basic_type: BasicType = Object.create(BasicType.prototype);
const union_type: UnionType = Object.create(UnionType.prototype);
const content = 'content';

it('should return raw content while type does not need brackets', () => {
  expect(emit_brackets(content, basic_type)).toBe(content);
});

it('should return bracked content while type need brackets', () => {
  expect(emit_brackets(content, union_type)).toBe(`(${content})`);
});
