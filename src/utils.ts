import * as ts from 'typescript';
import {IType} from './collections';
import {IGenericDeclaration} from './declarations/generic-declaration';
import {IElement} from './element';
import {transform} from './transform';

const declare_token = ts.createToken(ts.SyntaxKind.DeclareKeyword);

export const add_declare_modifier_if_need = (
    modifiers: ts.Modifier[] | undefined, path: IElement<any>[]): ts.Modifier[] | undefined =>
  (path.length <= 1)
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

export const create_type_arguments = (args: undefined | IType[], path: IElement<any>[]) =>
  (args || []).map(
    argument => transform(argument, path) as ts.TypeNode,
  );
