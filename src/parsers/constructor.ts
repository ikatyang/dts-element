import * as ts from 'typescript';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_class_member, IClassMember} from '../members/class-member';
import {parse_native} from '../parse';
import {create_constructor_type} from '../types/constructor-type';
import {has_kind, if_defined} from '../utils';

export const parse_constructor = (node: ts.ConstructorDeclaration): IClassMember =>
  create_class_member({
    owned: create_constructor_type({
      generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
      parameters: if_defined(node.parameters, parameters => parameters.map(parse_native) as IParameterDeclaration[]),
      return: if_defined(node.type, parse_native),
    }),
    readonly: has_kind(node.modifiers, ts.SyntaxKind.ReadonlyKeyword),
    optional: if_defined(node.questionToken, () => true),
  });
