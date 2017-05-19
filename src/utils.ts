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
