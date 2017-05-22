import * as ts from 'typescript';
import {create_function_declaration} from '../declarations/function-declaration';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_class_member, IClassMember} from '../members/class-member';
import {parse_native} from '../parse';
import {create_function_type} from '../types/function-type';
import {has_kind, if_defined} from '../utils';

export const parse_method_declaration = (node: ts.MethodDeclaration): IClassMember =>
  create_class_member({
    owned: create_function_declaration({
      name: (node.name as ts.Identifier).text,
      type: create_function_type({
        generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
        parameters: if_defined(node.parameters, parameters => parameters.map(parse_native) as IParameterDeclaration[]),
        return: if_defined(node.type, parse_native),
      }),
    }),
    readonly: has_kind(node.modifiers, ts.SyntaxKind.ReadonlyKeyword),
    optional: if_defined(node.questionToken, () => true),
    static: has_kind(node.modifiers, ts.SyntaxKind.StaticKeyword),
    abstract: has_kind(node.modifiers, ts.SyntaxKind.AbstractKeyword),
    public: has_kind(node.modifiers, ts.SyntaxKind.PublicKeyword),
    private: has_kind(node.modifiers, ts.SyntaxKind.PrivateKeyword),
    protected: has_kind(node.modifiers, ts.SyntaxKind.ProtectedKeyword),
  });
