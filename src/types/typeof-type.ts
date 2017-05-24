import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {create_qualified_name} from '../utils';

export interface ITypeofTypeOptions extends IElementOptions {
  parents?: string[];
  name: string;
}

export interface ITypeofType
  extends IElement<ElementKind.TypeofType>, ITypeofTypeOptions {}

export const create_typeof_type = (options: ITypeofTypeOptions): ITypeofType => ({
  ...create_element(ElementKind.TypeofType),
  ...options,
});

/**
 * @hidden
 */
export const transform_typeof_type = (element: ITypeofType, path: IElement<any>[]) =>
  ts.createTypeQueryNode(
    /* exprName  */ (element.parents === undefined || element.parents.length === 0)
                      ? ts.createIdentifier(element.name)
                      : create_qualified_name([...element.parents, element.name]),
  );
