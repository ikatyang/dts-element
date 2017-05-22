import * as ts from 'typescript';
import {create_variable_declaration} from '../declarations/variable-declaration';
import {create_class_member, IClassMember} from '../members/class-member';
import {parse_native} from '../parse';
import {has_kind, if_defined} from '../utils';

export const parse_property_declaration = (node: ts.PropertyDeclaration): IClassMember =>
  create_class_member({
    owned: create_variable_declaration({
      name: (node.name as ts.Identifier).text,
      type: if_defined(node.type, parse_native),
    }),
    readonly: has_kind(node.modifiers, ts.SyntaxKind.ReadonlyKeyword),
    optional: if_defined(node.questionToken, () => true),
    static: has_kind(node.modifiers, ts.SyntaxKind.StaticKeyword),
    abstract: has_kind(node.modifiers, ts.SyntaxKind.AbstractKeyword),
    public: has_kind(node.modifiers, ts.SyntaxKind.PublicKeyword),
    private: has_kind(node.modifiers, ts.SyntaxKind.PrivateKeyword),
    protected: has_kind(node.modifiers, ts.SyntaxKind.ProtectedKeyword),
  });
