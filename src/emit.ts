import * as ts from 'typescript';
import {IElement} from './element';
import {transform} from './transform';

export const emit = (element: IElement<any>, options?: ts.PrinterOptions) => {
  const ts_node = transform(element);
  const source_file = ts.createSourceFile('', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
  const printer = ts.createPrinter(options);
  return printer.printNode(ts.EmitHint.Unspecified, ts_node, source_file);
};
