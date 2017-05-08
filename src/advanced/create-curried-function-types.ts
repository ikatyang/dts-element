import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {TypeDeclaration} from '../elements/declarations/type-declaration';
import {ObjectMember} from '../elements/members/object-member';
import {Parameter} from '../elements/parameter';
import {Type} from '../elements/type';
import {TypeAssertion} from '../elements/type-assertion';
import {FunctionType} from '../elements/types/function-type';
import {GenericType} from '../elements/types/generic-type';
import {ObjectType} from '../elements/types/object-type';
import {TypedType} from '../elements/types/typed-type';
import {left_pad} from '../utils/left-pad';

export interface ICreateCurriedFunctionTypesRequiredParameters {
  name: string;
  type: FunctionType;
}

export interface ICreateCurriedFunctionTypesOptionalParameters {
  placeholder: Type | null;
  generate_type_name(index: number): string;
  generate_placeholder_name(parameter_name: string): string;
}

export type ICreateCurriedFunctionTypesParameters =
  ICreateCurriedFunctionTypesRequiredParameters & Partial<ICreateCurriedFunctionTypesOptionalParameters>;

// tslint:disable:no-magic-numbers no-bitwise

/**
 * ```ts
 * type map = map_00;
 * type map_00 = {
 *   <T, U>(fn: (v: T) => U, array: T[]): map_11<T, U>;
 *   <T>(_fn: PH, array: T[]): map_01<T>;
 *   <T, U>(fn: (v: T) => U): map_10<T, U>;
 * };
 * type map_01<T> = {
 *   <U>(fn: (v: T) => U): map_11<T, U>;
 * };
 * type map_10<T, U> = {
 *   (array: T[]): map_11<T, U>;
 * };
 * type map_11<T, U> = U[];
 * ```
 */
export const create_curried_function_types = ({
      name,
      type,
      placeholder = null,
      generate_type_name = (index: number): string =>
        (`${name}_${left_pad(index.toString(2), type.parameters.parameters.length, '0')}`),
      generate_placeholder_name = (parameter_name: string): string => `_${parameter_name}`,
    }: ICreateCurriedFunctionTypesParameters): TypeDeclaration[] => {
  const curried_type_declarations = [...new Array(2 ** type.parameters.parameters.length)]
    .map((_value: any, index: number) => new TypeDeclaration({name: generate_type_name(index)}));
  const {parameters, generics} = type.parameters;
  const placeholder_parameters = (placeholder === null)
    ? null
    : parameters.map((parameter: Parameter): Parameter => new Parameter({
      name: generate_placeholder_name(parameter.parameters.name),
      type: placeholder,
    }));

  const return_type = type.parameters.return;
  if (return_type instanceof TypeAssertion) {
    throw new Error('AssertionType is not supported in create_curried_function_types');
  }

  curried_type_declarations.forEach((type_declaration: TypeDeclaration, index: number) => {

    const used_parameters: Parameter[] = [];
    const rest_parameters: Parameter[] = [];
    const rest_placeholders: Parameter[] = [];

    const is_parameter_used = (parameter_index: number): boolean =>
      (((2 ** (parameters.length - parameter_index - 1)) & ~index) === 0);

    parameters.forEach((parameter: Parameter, parameter_index: number) => {
      if (is_parameter_used(parameter_index)) {
        used_parameters.push(parameter);
      } else {
        rest_parameters.push(parameter);
        if (placeholder_parameters !== null) {
          rest_placeholders.push(placeholder_parameters[parameter_index]);
        }
      }
    });

    const used_generics = generics.filter((generic: GenericType) =>
      used_parameters.some((used_parameter: Parameter) => used_parameter.has(generic, true)));
    const rest_generics = generics.filter((generic: GenericType): boolean =>
      used_generics.indexOf(generic) === -1);

    type_declaration.parameters.generics.push(...used_generics);

    const curry_level = rest_parameters.length;
    const is_return_type_declaration = (index === curried_type_declarations.length - 1);

    if (is_return_type_declaration) {
      type_declaration.parameters.type = return_type;
    } else {
      const object_type = new ObjectType({members: []});
      type_declaration.parameters.type = object_type;
      // tslint:disable-next-line:only-arrow-functions
      (function recursive(
          current_parameters: Parameter[],
          current_used_generics: GenericType[],
          current_rest_generics: GenericType[]): void {
        if (current_parameters.length > 0 &&
            current_parameters[current_parameters.length - 1].parameters.type !== placeholder) {

          const rest_mask = current_parameters.reduce(
            (mask: number, parameter: Parameter) =>
              (parameter.parameters.type === placeholder)
                ? mask
                : mask | (1 << (parameters.length - parameters.indexOf(parameter) - 1)),
            index,
          );

          object_type.parameters.members.push(new ObjectMember({
            owned: new FunctionDeclaration({
              name: null,
              type: new FunctionType({
                generics: current_used_generics,
                parameters: current_parameters,
                return: new TypedType({
                  owned: curried_type_declarations[rest_mask],
                  generics: curried_type_declarations[rest_mask].parameters.generics,
                }),
              }),
            }),
          }));
        }
        const current_index = current_parameters.length;
        if (current_index < curry_level) {
          const current_parameter = rest_parameters[current_index];
          const current_placeholder = rest_placeholders[current_index];

          const current_parameter_rest_generics: GenericType[] = [];
          const current_parameter_used_generics: GenericType[] = [];

          current_rest_generics.forEach((generic: GenericType) => {
            if (current_parameter.has(generic, true)) {
              current_parameter_used_generics.push(generic);
            } else {
              current_parameter_rest_generics.push(generic);
            }
          });

          recursive(
            [...current_parameters, current_parameter],
            [...current_used_generics, ...current_parameter_used_generics],
            current_parameter_rest_generics,
          );
          if (placeholder !== null) {
            recursive(
              [...current_parameters, current_placeholder],
              current_used_generics,
              current_rest_generics,
            );
          }
        }
      })([], [], rest_generics);

      object_type.parameters.members.sort((member1: ObjectMember, member2: ObjectMember) => {
        const function_type_1: FunctionType = member1.parameters.owned.parameters.type;
        const function_type_2: FunctionType = member2.parameters.owned.parameters.type;
        return function_type_2.parameters.parameters.length - function_type_1.parameters.parameters.length;
      });
    }
  });

  curried_type_declarations.unshift(new TypeDeclaration({
    name,
    type: new TypedType({
      owned: curried_type_declarations[0],
    }),
  }));

  return curried_type_declarations;
};
