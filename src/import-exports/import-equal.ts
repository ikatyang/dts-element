import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';

export interface IImportEqualOptions extends IElementOptions {
  from: string;
  name: string;
}

export interface IImportEqual
  extends IElement<ElementKind.ImportEqual>, IImportEqualOptions {}

export const create_import_equal = (options: IImportEqualOptions): IImportEqual => ({
  ...create_element(ElementKind.ImportEqual),
  ...options,
});

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_import_equal = (element: IImportEqual, path: IElement<any>[]) =>
  ts.createImportEqualsDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* name            */ ts.createIdentifier(element.name),
    /* moduleReference */ ts.createExternalModuleReference(ts.createLiteral(element.from)),
  );
