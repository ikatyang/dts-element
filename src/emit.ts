import * as ts from 'typescript';
import { IElement } from './element';
import { transform } from './transform';

export const emit_native = (node: ts.Node, options?: ts.PrinterOptions) => {
  const source_file = ts.createSourceFile(
    '',
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS,
  );
  const printer = ts.createPrinter(options);
  return printer.printNode(ts.EmitHint.Unspecified, node, source_file);
};

export const emit = (element: IElement<any>, options?: ts.PrinterOptions) =>
  emit_native(transform(element), options);
