import * as ts from 'typescript';
import {IModuleMember} from '../collections';
import {create_global_declaration, IGlobalDeclaration} from '../declarations/global-declaration';
import {create_module_declaration, IModuleDeclaration} from '../declarations/module-declaration';
import {create_namespace_declaration, INamespaceDeclaration} from '../declarations/namespace-declaration';
import {parse_native} from '../parse';
import {has_kind, if_defined} from '../utils';
import {parse_identifier} from './identifier';

export const parse_module_declaration = (
    node: ts.ModuleDeclaration): INamespaceDeclaration | IGlobalDeclaration | IModuleDeclaration => {
  if ((node.flags & ts.NodeFlags.Namespace) !== 0) {
    return create_namespace_declaration({
      name: parse_identifier(node.name as ts.Identifier),
      export: has_kind(node.modifiers, ts.SyntaxKind.ExportKeyword),
      members: if_defined(node.body as ts.ModuleBlock, module_block =>
        module_block.statements.map(parse_native) as IModuleMember[]),
    });
  }
  if ((node.flags & ts.NodeFlags.GlobalAugmentation) !== 0) {
    return create_global_declaration({
      members: if_defined(node.body as ts.ModuleBlock, module_block =>
        module_block.statements.map(parse_native) as IModuleMember[]),
    });
  }
  return create_module_declaration({
    name: (node.name as ts.StringLiteral).text,
    members: if_defined(node.body as ts.ModuleBlock, module_block =>
      module_block.statements.map(parse_native) as IModuleMember[]),
  });
};
