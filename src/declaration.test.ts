import { Declaration } from './declaration';

const input = `line 1
line 2
line 3`;

const output = `/**
 * line 1
 * line 2
 * line 3
 */
`;

describe('#emit_jsdoc()', () => {
  it('should return empty-string with jsdoc = null', () => {
    const declaration = { parameters: { jsdoc: null } };
    expect(Declaration.prototype.emit_jsdoc.call(declaration)).toBe('');
  });
  it('should return formatted jsdoc with jsdoc = string', () => {
    const declaration = { parameters: { jsdoc: input } };
    expect(Declaration.prototype.emit_jsdoc.call(declaration)).toBe(output);
  });
});
