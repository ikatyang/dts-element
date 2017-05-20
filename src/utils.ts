import * as ts from 'typescript';
import {IElement} from './element';

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
  const identifiers = names.map(name => ts.createIdentifier(name));
  return identifiers.slice(minimum_names).reduce(
    (previous: ts.QualifiedName, current: ts.Identifier) =>
      ts.createQualifiedName(previous, current),
    ts.createQualifiedName(identifiers[0], identifiers[1]),
  );
};
