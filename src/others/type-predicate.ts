import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {INativeType} from '../types/native-type';

export interface ITypePredicateOptions {
  parameter: IParameterDeclaration | INativeType;
  type: IType;
}

export interface ITypePredicate
  extends IElement<ElementKind.TypePredicate>, ITypePredicateOptions {}

export const create_type_predicate = (options: ITypePredicateOptions): ITypePredicate => ({
  ...create_element(ElementKind.TypePredicate),
  ...options,
});

export const transform_type_predicate = (element: ITypePredicate, path: IElement<any>[]) =>
  ts.createTypePredicateNode(
    /* parameterName */ (element.parameter.kind === ElementKind.NativeType)
                          ? (() => {
                            if (element.parameter.type.kind !== ts.SyntaxKind.ThisKeyword) {
                              throw new Error(`type_predicate.parameter should be a ParameterDeclaration or this_type`);
                            }
                            return ts.createThisTypeNode();
                          })()
                          : element.parameter.name,
    /* type          */ transform(element.type, [...path, element]) as ts.TypeNode,
  );
