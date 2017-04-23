import { Declaration } from './declaration';

describe('#emit_jsdoc()', () => {
  it('should return formatted jsdoc', () => {
    const declaration = { parameters: { jsdoc: 'line 1\nline 2\nline 3' } };
    expect(Declaration.prototype.emit_jsdoc.call(declaration)).toMatchSnapshot();
  });
});
