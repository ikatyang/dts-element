import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type} from '../constants';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {create_array_type} from '../types/array-type';

export interface IParameterOptions {
  name: string;
  type?: IType;
  rest?: boolean;
  optional?: boolean;
}

export interface IParameter
  extends IElement<ElementKind.Parameter>, IParameterOptions {}

export const create_parameter = (options: IParameterOptions): IParameter => ({
  ...create_element(ElementKind.Parameter),
  ...options,
});

export const transform_parameter = (element: IParameter, path: IElement<any>[]) =>
  ts.createParameter(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* dotDotDotToken  */ (element.rest === true)
                          ? ts.createToken(ts.SyntaxKind.DotDotDotToken)
                          : undefined,
    /* name            */ element.name,
    /* questionToken   */ (element.optional === true)
                          ? ts.createToken(ts.SyntaxKind.QuestionToken)
                          : undefined,
    /* type            */ transform(
                            // tslint:disable-next-line:ter-indent
                            (element.rest === true)
                              ? create_array_type({type: element.type || any_type})
                              : element.type || any_type,
                            [...path, element],
                          ) as ts.TypeNode,
    /* initializer     */ undefined,
  );
