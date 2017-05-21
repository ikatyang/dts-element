import * as ts from 'typescript';
import {parse_native} from '../parse';
import {create_intersection_type, IIntersectionType} from '../types/intersection-type';

export const parse_intersection_type = (node: ts.IntersectionTypeNode): IIntersectionType =>
  create_intersection_type({
    types: node.types.map(parse_native),
  });
