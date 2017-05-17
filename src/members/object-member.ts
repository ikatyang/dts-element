import * as ts from 'typescript';
import {any_type, ElementKind} from '../constants';
import {IFunctionDeclaration} from '../declarations/function-declaration';
import {IVariableDeclaration} from '../declarations/variable-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {create_function_type, transform_function_type} from '../types/function-type';

export interface IObjectMemberOptions {
  owned: IVariableDeclaration | IFunctionDeclaration;
  optional?: boolean;
  readonly?: boolean;
}

export interface IObjectMember
  extends IElement<ElementKind.ObjectMember>, IObjectMemberOptions {}

export const create_object_member = (options: IObjectMemberOptions): IObjectMember => ({
  ...create_element(ElementKind.ObjectMember),
  ...options,
});

export const transform_object_member = (element: IObjectMember, path: IElement<any>[]) => {
  const modifiers = (element.readonly === true)
    ? [ts.createToken(ts.SyntaxKind.ReadonlyKeyword)]
    : undefined;
  const questionToken = (element.optional === true)
    ? ts.createToken(ts.SyntaxKind.QuestionToken)
    : undefined;
  switch (element.owned.kind) {
    case ElementKind.VariableDeclaration:
      return ts.createPropertySignature(
        /* modifiers     */ modifiers,
        /* name          */ element.owned.name,
        /* questionToken */ questionToken,
        /* type          */ transform(element.owned.type || any_type, [...path, element]) as ts.TypeNode,
        /* initializer   */ undefined,
      );
    case ElementKind.FunctionDeclaration:
      const function_type = transform_function_type(element.owned.type || create_function_type(), [...path, element]);
      return (element.owned.name === undefined)
        ? ts.createCallSignature(
          /* typeParameters  */ function_type.typeParameters,
          /* parameters      */ function_type.parameters,
          /* type            */ function_type.type,
        )
        : ts.createMethodSignature(
          /* typeParameters  */ function_type.typeParameters,
          /* parameters      */ function_type.parameters,
          /* type            */ function_type.type,
          /* name            */ element.owned.name,
          /* questionToken   */ questionToken,
        );
    default:
      throw new Error(`Unexpected kind ${ElementKind[element.kind]} ( ${element.kind} )`);
  }
};
