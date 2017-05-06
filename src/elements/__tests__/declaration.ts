jest.unmock('../declaration');

import {Declaration, IDeclarationOptionalParameters} from '../declaration';

// tslint:disable-next-line:no-empty-interface
export interface ITestDeclarationRequiredParameters {}

// tslint:disable-next-line:no-empty-interface
export interface ITestDeclarationOptionalParameters {}

export class TestDeclaration
    extends Declaration<ITestDeclarationRequiredParameters, ITestDeclarationOptionalParameters> {

  public get default_parameters(): IDeclarationOptionalParameters & ITestDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters);
  }

  public _emit_raw(): string {
    return `[TestDeclaration ${this.parameters.name}]`;
  }

}

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TestDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
