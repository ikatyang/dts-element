import * as ts from 'typescript';
import {IType} from './collections';
import {ElementKind} from './constants';
import {IGenericDeclaration} from './declarations/generic-declaration';
import {IElement} from './element';
import {transform} from './transform';
import {IGeneralType} from './types/general-type';

const declare_token = ts.createToken(ts.SyntaxKind.DeclareKeyword);

export const add_declare_modifier_if_need = (
    modifiers: ts.Modifier[] | undefined, path: IElement<any>[]): ts.Modifier[] | undefined =>
  (path.length <= 1 || path[(path.length - 1) - 1].kind === ElementKind.TopLevelElement)
    ? (modifiers === undefined)
        ? [declare_token]
        : (modifiers.length !== 0 && modifiers[0].kind === ts.SyntaxKind.ExportKeyword)
          ? [modifiers[0], declare_token, ...modifiers.slice(1)]
          : [declare_token, ...modifiers]
    : modifiers;

export const create_qualified_name = (names: string[]) => {
  const minimum_names = 2;
  if (names.length < minimum_names) {
    throw new Error(`names in qualified_name should be an array of string (length >= ${minimum_names})`);
  }
  const identifiers = names.map(name => ts.createIdentifier(name));
  return identifiers.slice(minimum_names).reduce(
    (previous: ts.QualifiedName, current: ts.Identifier) =>
      ts.createQualifiedName(previous, current),
    ts.createQualifiedName(identifiers[0], identifiers[1]),
  );
};

export const create_entity_name = (name: string | string[]): ts.EntityName =>
  (typeof name === 'string')
    ? ts.createIdentifier(name)
    : (name.length === 1)
      ? ts.createIdentifier(name[0])
      : create_qualified_name(name);

export const create_type_parameters = (generics: undefined | IGenericDeclaration[], path: IElement<any>[]) =>
  (generics || []).map(
    generic => transform(generic, path) as ts.TypeParameterDeclaration,
  );

export const create_type_nodes = (types: undefined | IType[], path: IElement<any>[]) =>
  (types || []).map(
    type => transform(type, path) as ts.TypeNode,
  );

export const create_property_access = (names: string[]): ts.Expression => {
  const minimum_names = 2;
  if (names.length < minimum_names) {
    throw new Error(`names in property_access should be an array of string (length >= ${minimum_names})`);
  }
  const identifiers = names.map(name => ts.createIdentifier(name));
  return identifiers.slice(minimum_names).reduce(
    (previous, current) => ts.createPropertyAccess(previous, current),
    ts.createPropertyAccess(identifiers[0], identifiers[1]),
  );
};

export const create_expression_for_general_type = (element: IGeneralType, path: IElement<any>[]) =>
  ts.createExpressionWithTypeArguments(
    /* typeArguments */ create_type_nodes(element.generics, path),
    /* expression    */ (element.parents === undefined || element.parents.length === 0)
                          ? ts.createIdentifier(element.name)
                          : create_property_access([...element.parents, element.name]),
  );

export const create_identifier_if_defined = (name: string | undefined) =>
  (name === undefined)
    ? undefined
    : ts.createIdentifier(name);
