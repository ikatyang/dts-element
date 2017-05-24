import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {INativeType} from '../types/native-type';

export interface ITypePredicateOptions extends IElementOptions {
  parameter: string | INativeType;
  type: IType;
}

export interface ITypePredicate
  extends IElement<ElementKind.TypePredicate>, ITypePredicateOptions {}

export const create_type_predicate = (options: ITypePredicateOptions): ITypePredicate => ({
  ...create_element(ElementKind.TypePredicate),
  ...options,
});

/**
 * @hidden
 */
export const transform_type_predicate = (element: ITypePredicate, path: IElement<any>[]) =>
  ts.createTypePredicateNode(
    /* parameterName */ (typeof element.parameter === 'string')
                          ? element.parameter
                          : (() => {
                            if (element.parameter.type.kind !== ts.SyntaxKind.ThisKeyword) {
                              throw new Error(`type_predicate.parameter should be a string or this_type`);
                            }
                            return ts.createThisTypeNode();
                          })(),
    /* type          */ transform(element.type, path) as ts.TypeNode,
  );
