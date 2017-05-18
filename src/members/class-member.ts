import * as ts from 'typescript';
import {any_type, ElementKind} from '../constants';
import {IFunctionDeclaration} from '../declarations/function-declaration';
import {IVariableDeclaration} from '../declarations/variable-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {transform_constructor_type, IConstructorType} from '../types/constructor-type';
import {create_function_type, transform_function_type} from '../types/function-type';

export interface IClassMemberOptions {
  owned: IVariableDeclaration | IFunctionDeclaration | IConstructorType;
  optional?: boolean;
  readonly?: boolean;
  static?: boolean;
  abstract?: boolean;
  public?: boolean;
  private?: boolean;
  protected?: boolean;
}

export interface IClassMember
  extends IElement<ElementKind.ClassMember>, IClassMemberOptions {}

export const create_class_member = (options: IClassMemberOptions): IClassMember => ({
  ...create_element(ElementKind.ClassMember),
  ...options,
});

export const transform_class_member = (element: IClassMember, path: IElement<any>[]) => {
  const accessors =
    (element.public === true)
      ? [ts.createToken(ts.SyntaxKind.PublicKeyword)]
      : (element.protected === true)
        ? [ts.createToken(ts.SyntaxKind.ProtectedKeyword)]
        : (element.private === true)
          ? [ts.createToken(ts.SyntaxKind.PrivateKeyword)]
          : [];
  const modifiers = [
    ...accessors,
    ...(element.abstract === true)
      ? [ts.createToken(ts.SyntaxKind.AbstractKeyword)]
      : (element.static === true)
        ? [ts.createToken(ts.SyntaxKind.StaticKeyword)]
        : [],
    ...(element.readonly === true)
      ? [ts.createToken(ts.SyntaxKind.ReadonlyKeyword)]
      : [],
  ];
  const question_token = (element.optional === true)
    ? ts.createToken(ts.SyntaxKind.QuestionToken)
    : undefined;
  switch (element.owned.kind) {
    case ElementKind.VariableDeclaration:
      return ts.createPropertySignature(
        /* modifiers     */ modifiers,
        /* name          */ element.owned.name,
        /* questionToken */ question_token,
        /* type          */ transform(element.owned.type || any_type, [...path, element]) as ts.TypeNode,
        /* initializer   */ undefined as any,
      );
    case ElementKind.FunctionDeclaration:
      if (element.owned.name === undefined) {
        throw new Error(`class_member.owned.name should be a string`);
      }
      const function_type = transform_function_type(element.owned.type || create_function_type(), [...path, element]);
      const method_signature = ts.createMethodSignature(
        /* typeParameters  */ function_type.typeParameters,
        /* parameters      */ function_type.parameters,
        /* type            */ function_type.type,
        /* name            */ element.owned.name,
        /* questionToken   */ question_token,
      );
      method_signature.modifiers = modifiers as ts.NodeArray<ts.Modifier>;
      return method_signature;
    case ElementKind.ConstructorType:
      const constructor_type = transform_constructor_type(element.owned, [...path, element]);
      return ts.createConstructor(
        /* decorators      */ undefined,
        /* modifiers       */ accessors,
        /* parameters      */ constructor_type.parameters,
        /* body            */ undefined,
      );
    default:
      throw new Error(`Unexpected kind ${ElementKind[element.kind]} ( ${element.kind} )`);
  }
};
