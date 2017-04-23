import { Declaration } from './declaration';

describe('#emit_jsdoc()', () => {
  it('should return empty-string while jsdoc is empty', () => {
    const declaration = { parameters: { jsdoc: '' } };
    expect(Declaration.prototype.emit_jsdoc.call(declaration)).toBe('');
  });
  it('should return formatted jsdoc while jsdoc is non-empty ', () => {
    const declaration = { parameters: { jsdoc: 'line 1\nline 2\nline 3' } };
    expect(Declaration.prototype.emit_jsdoc.call(declaration)).toMatchSnapshot();
  });
});
