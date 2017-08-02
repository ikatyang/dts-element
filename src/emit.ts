import * as ts from 'typescript';
import { ITopLevelMember } from './collections';
import { IElement } from './element';
import { create_top_level_element } from './others/top-level-element';
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

export const emit = (
  element: IElement<any> | ITopLevelMember[],
  options?: ts.PrinterOptions,
) => {
  const target = Array.isArray(element)
    ? create_top_level_element({ members: element })
    : element;
  return emit_native(transform(target), options);
};
