import * as ts from 'typescript';
import { IGenericDeclaration } from '../declarations/generic-declaration';
import { parse_native } from '../parse';
import { create_infer_type, IInferType } from '../types/infer-type';

export const parse_infer_type = (node: ts.InferTypeNode): IInferType =>
  create_infer_type({
    generic: parse_native(node.typeParameter) as IGenericDeclaration,
  });
