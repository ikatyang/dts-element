// import * as ts from 'typescript';
// import {ElementKind} from '../constants';
// import {create_element, IElement} from '../element';

// export interface IObjectTypeOptions {
//   value: boolean | number | string;
// }

// export interface IObjectType
//   extends IElement<ElementKind.ObjectType>, IObjectTypeOptions {}

// export const create_literal_type = (options: IObjectTypeOptions): IObjectType => ({
//   ...create_element(ElementKind.ObjectType),
//   ...options,
// });

// export const transform_literal_type = (element: IObjectType, path: IElement<any>[]) =>
//   ts.createTypeLiteralNode(
//     /* literal */ ts.createLiteral(element.value),
//   );
