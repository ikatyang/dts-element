import * as ts from 'typescript';
import { IObjectMember } from '../members/object-member';
import { parse_native } from '../parse';
import { create_object_type, IObjectType } from '../types/object-type';

export const parse_type_literal = (node: ts.TypeLiteralNode): IObjectType =>
  create_object_type({
    members: node.members.map(parse_native) as IObjectMember[],
  });
