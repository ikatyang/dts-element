import * as ts from 'typescript';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';
import { add_declare_modifier_if_need } from '../utils';
import { IVariableDeclaration } from './variable-declaration';

export interface IEnumDeclarationOptions extends IElementOptions {
  name: string;
  export?: boolean;
  members?: IVariableDeclaration[];
}

export interface IEnumDeclaration
  extends IElement<ElementKind.EnumDeclaration>,
    IEnumDeclarationOptions {}

export const create_enum_declaration = (
  options: IEnumDeclarationOptions,
): IEnumDeclaration => ({
  ...create_element(ElementKind.EnumDeclaration),
  ...options,
});

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_enum_declaration = (
  element: IEnumDeclaration,
  path: IElement<any>[],
) => {
  let counter = 0;
  return ts.createEnumDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ add_declare_modifier_if_need(
      element.export === true
        ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
        : undefined,
      path,
    ),
    /* name        */ element.name,
    /* members     */ (element.members || []).map(variable_declaration => {
      if (
        variable_declaration.type &&
        variable_declaration.type.kind !== ElementKind.LiteralType
      ) {
        throw new Error(
          `enum_declaration.members[i].type should be a LiteralType`,
        );
      }
      let value = variable_declaration.type && variable_declaration.type.value;
      if (value === undefined) {
        value = counter++;
      } else if (typeof value === 'number') {
        counter = value + 1;
      }
      return ts.createEnumMember(
        /* name        */ variable_declaration.name,
        /* initializer */ ts.createLiteral(value),
      );
    }),
  );
};
