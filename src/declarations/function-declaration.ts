import * as ts from 'typescript';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';
import { transform } from '../transform';
import { create_function_type, IFunctionType } from '../types/function-type';
import { add_declare_modifier_if_need } from '../utils';

export interface IFunctionDeclarationOptions extends IElementOptions {
  name: string | undefined;
  type?: IFunctionType;
  export?: boolean;
}

export interface IFunctionDeclaration
  extends IElement<ElementKind.FunctionDeclaration>,
    IFunctionDeclarationOptions {}

export const create_function_declaration = (
  options: IFunctionDeclarationOptions,
): IFunctionDeclaration => ({
  ...create_element(ElementKind.FunctionDeclaration),
  ...options,
});

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_function_declaration = (
  element: IFunctionDeclaration,
  path: IElement<any>[],
) => {
  const function_type = transform(
    element.type || create_function_type(),
    path,
  ) as ts.FunctionDeclaration;
  return ts.createFunctionDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ add_declare_modifier_if_need(
      element.export === true
        ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
        : undefined,
      path,
    ),
    /* asteriskToken   */ undefined,
    /* name            */ element.name,
    /* typeParameters  */ function_type.typeParameters,
    /* parameters      */ function_type.parameters,
    /* type            */ function_type.type,
    /* body            */ undefined,
  );
};
