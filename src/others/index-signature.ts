import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';

export interface IIndexSignatureOptions extends IElementOptions {
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

/**
 * @hidden
 */
export const transform_index_signature = (element: IIndexSignature, path: IElement<any>[]) =>
  ts.createIndexSignature(
    /* decorators  */ undefined,
    /* modifiers   */ (element.readonly === true)
                        ? [ts.createToken(ts.SyntaxKind.ReadonlyKeyword)]
                        : undefined,
    /* parameters  */ [transform(element.parameter, path) as ts.ParameterDeclaration],
    /* type        */ transform(element.type || any_type, path) as ts.TypeNode,
  );
