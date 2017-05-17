import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {transform_parameter_declaration, IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IIndexSignatureOptions {
  parameter: IParameterDeclaration;
  type?: IType;
  readonly?: boolean;
}

export interface IIndexSignature
  extends IElement<ElementKind.IndexSignature>, IIndexSignatureOptions {}

export const create_index_signature = (options: IIndexSignatureOptions): IIndexSignature => ({
  ...create_element(ElementKind.IndexSignature),
  ...options,
});

export const transform_index_signature = (element: IIndexSignature, path: IElement<any>[]) =>
  ts.createIndexSignature(
    /* decorators  */ undefined,
    /* modifiers   */ (element.readonly === true)
                        ? [ts.createToken(ts.SyntaxKind.ReadonlyKeyword)]
                        : undefined,
    /* parameters  */ [transform_parameter_declaration(element.parameter, [...path, element])],
    /* type        */ transform(element.type || any_type, [...path, element]) as ts.TypeNode,
  );
