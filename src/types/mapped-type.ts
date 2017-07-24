import * as ts from 'typescript';
import { IType } from '../collections';
import { any_type, ElementKind } from '../constants';
import { IGenericDeclaration } from '../declarations/generic-declaration';
import { create_element, IElement, IElementOptions } from '../element';
import { transform } from '../transform';

export interface IMappedTypeOptions extends IElementOptions {
  parameter: IGenericDeclaration;
  readonly?: boolean;
  optional?: boolean;
  type?: IType;
}

export interface IMappedType
  extends IElement<ElementKind.MappedType>,
    IMappedTypeOptions {}

export const create_mapped_type = (
  options: IMappedTypeOptions,
): IMappedType => ({
  ...create_element(ElementKind.MappedType),
  ...options,
});

/**
 * @hidden
 */
export const transform_mapped_type = (
  element: IMappedType,
  path: IElement<any>[],
) => {
  if (element.parameter.extends === undefined) {
    throw new Error(`mapped_type.parameter.extends should be a Type`);
  }
  return ts.createMappedTypeNode(
    /* readonlyToken */ element.readonly === true
      ? ts.createToken(ts.SyntaxKind.ReadonlyKeyword)
      : undefined,
    /* typeParameter */ transform(
      element.parameter,
      path,
    ) as ts.TypeParameterDeclaration,
    /* questionToken */ element.optional === true
      ? ts.createToken(ts.SyntaxKind.QuestionToken)
      : undefined,
    /* type          */ transform(
      element.type || any_type,
      path,
    ) as ts.TypeNode,
  );
};
