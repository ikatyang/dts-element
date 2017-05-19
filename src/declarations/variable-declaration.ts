import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IVariableDeclarationOptions {
  name: string;
  type?: IType;
  export?: boolean;
  const?: boolean;
  let?: boolean;
}

export interface IVariableDeclaration
  extends IElement<ElementKind.VariableDeclaration>, IVariableDeclarationOptions {}

export const create_variable_declaration = (options: IVariableDeclarationOptions): IVariableDeclaration => ({
  ...create_element(ElementKind.VariableDeclaration),
  ...options,
});

// tslint:disable:ter-indent

export const transform_variable_declaration = (element: IVariableDeclaration, path: IElement<any>[]) => {
  const type = transform(element.type || any_type, path) as ts.TypeNode;
  return ts.createVariableStatement(
    /* modifiers       */ (element.export === true)
                            ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                            : undefined,
    /* declarationList */ ts.createVariableDeclarationList(
                            /* declarations  */ [ts.createVariableDeclaration(element.name, type)],
                            /* flags         */ (element.const === true)
                                                  ? ts.NodeFlags.Const
                                                  : (element.let === true)
                                                    ? ts.NodeFlags.Let
                                                    : undefined,
                          ),
  );
};
