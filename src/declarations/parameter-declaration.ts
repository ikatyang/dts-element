import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type} from '../constants';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {create_array_type} from '../types/array-type';

export interface IParameterDeclarationOptions extends IElementOptions {
  name: string;
  type?: IType;
  rest?: boolean;
  optional?: boolean;
}

export interface IParameterDeclaration
  extends IElement<ElementKind.ParameterDeclaration>, IParameterDeclarationOptions {}

export const create_parameter_declaration = (options: IParameterDeclarationOptions): IParameterDeclaration => ({
  ...create_element(ElementKind.ParameterDeclaration),
  ...options,
});

// tslint:disable:ter-indent

export const transform_parameter_declaration = (element: IParameterDeclaration, path: IElement<any>[]) =>
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
                            (element.rest === true)
                              ? create_array_type({type: element.type || any_type})
                              : element.type || any_type,
                            path,
                          ) as ts.TypeNode,
    /* initializer     */ undefined,
  );
