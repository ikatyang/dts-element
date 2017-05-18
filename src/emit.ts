import * as ts from 'typescript';
import {ElementKind} from './constants';
import {IElement} from './element';
import {emit_triple_slash_reference, ITripleSlashReference} from './others/triple-slash-reference';
import {transform} from './transform';

export const emit = (element: IElement<any>, options?: ts.PrinterOptions) => {
  switch (element.kind) {
    case ElementKind.TripleSlashReference:
      return emit_triple_slash_reference(element as ITripleSlashReference);
    default:
      const ts_node = transform(element);
      const source_file = ts.createSourceFile('', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
      const printer = ts.createPrinter(options);
      return printer.printNode(ts.EmitHint.Unspecified, ts_node, source_file);
  }
};
