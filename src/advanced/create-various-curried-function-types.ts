import {FunctionDeclaration} from '../elements/declarations/function-declaration';
import {TypeDeclaration} from '../elements/declarations/type-declaration';
import {ObjectMember} from '../elements/members/object-member';
import {Parameter} from '../elements/parameter';
import {FunctionType} from '../elements/types/function-type';
import {GenericType} from '../elements/types/generic-type';
import {LiteralType} from '../elements/types/literal-type';
import {ObjectType} from '../elements/types/object-type';
import {TypedType} from '../elements/types/typed-type';
import {
  create_curried_function_types,
  ICreateCurriedFunctionTypesOptionalParameters,
} from './create-curried-function-types';
import {get_default_type_name_generator} from './utils/get-default-type-name-generator';
import {sort_object_members} from './utils/sort-object-members';

export interface ICreateVariousCurriedFunctionTypesRequiredParameters {
  name: string;
  types: {[kind: string]: FunctionType};
}

export interface ICreateVariousCurriedFunctionTypesOptionalParameters
    extends ICreateCurriedFunctionTypesOptionalParameters {
  select_kind_name: string;
}

export type ICreateVariousCurriedFunctionTypesParameters =
  ICreateVariousCurriedFunctionTypesRequiredParameters & Partial<ICreateVariousCurriedFunctionTypesOptionalParameters>;

// tslint:disable:no-magic-numbers no-bitwise max-line-length

/**
 * ```ts
 * type map_00 = {
 *   <T>(_fn: PH, mappable: Mappable<T>): map_mappable_01<T>;
 *   <T>(_fn: PH, array: T[]): map_array_01<T>;
 *   <T, U>(fn: (v: T) => U, array: T[]): map_array_11<T, U>;
 *   <T, U>(fn: (v: T) => U, mappable: Mappable<T>): map_mappable_11<T, U>;
 *   <K extends \\"array\\", X extends \\"01\\">(): <T>(_fn: PH, array: T[]) => map_array_01<T>;
 *   <K extends \\"mappable\\">(): map_mappable_00;
 *   <X extends \\"1\\">(): <T, U>(fn: (v: T) => U) => map_10<T, U>;
 *   <K extends \\"array\\">(): map_array_00;
 *   <K extends \\"array\\", X extends \\"11\\">(): <T, U>(fn: (v: T) => U, array: T[]) => map_array_11<T, U>;
 *   <K extends \\"mappable\\", X extends \\"11\\">(): <T, U>(fn: (v: T) => U, mappable: Mappable<T>) => map_mappable_11<T, U>;
 *   <K extends \\"mappable\\", X extends \\"01\\">(): <T>(_fn: PH, mappable: Mappable<T>) => map_mappable_01<T>;
 *   <T, U>(fn: (v: T) => U): map_10<T, U>;
 * };
 * // ...
 * ```
 */
export const create_various_curried_function_types = (
    options: ICreateVariousCurriedFunctionTypesParameters): TypeDeclaration[] => {

// tslint:enable:max-line-length

  const {
    name,
    types,
    placeholder,
    select_kind_name = 'K',
  } = options;
  const kinds = Object.keys(types);
  const type_declarations_map = kinds.reduce(
    (current_type_declarations_map: {[kind: string]: TypeDeclaration[]}, kind: string) =>
      ({
        ...current_type_declarations_map,
        [kind]: create_curried_function_types({
          ...options,
          name: `${name}_${kind}`,
          type: types[kind],
          is_various: true,
        },
      )}),
    {},
  );

  const curry_level = types[kinds[0]].parameters.parameters.length;
  let conflict_parameter_mask = 0;
  types[kinds[0]].parameters.parameters.forEach((parameter: Parameter, index: number) => {
    if (!kinds.slice(1).every((kind: string) => (types[kind].parameters.parameters[index] === parameter))) {
      const mask = 2 ** (curry_level - index - 1);
      conflict_parameter_mask |= mask;
      // index -> mask
      // 0 -> 00
      // 1 -> 01
      // 2 -> 10
      // 3 -> 11
      //
      // if conflict_index = 1
      //   -> 01 11 -> no-change
      // no-conflict
      //   -> 00 10 -> merge-together
    }
  });

  const non_conflict_declarations = [...new Array(2 ** curry_level)]
    .map((_: any, index: number) => ((index & conflict_parameter_mask) !== 0)
      ? null
      : new TypeDeclaration({
        name: get_default_type_name_generator(name, types[kinds[0]])(index),
      }));

  non_conflict_declarations.map((non_conflict_declaration: TypeDeclaration | null, index: number) => {
    if (non_conflict_declaration === null) {
      return null;
    } else {
      const normal_members_array: ObjectMember[][] = [];
      const selectable_members_array: ObjectMember[][] = [];
      const root_selectable_members: ObjectMember[] = [];

      const push_member = (
          members_array: ObjectMember[][],
          member_index: number,
          member: ObjectMember): void => {
        // tslint:disable-next-line
        const members = members_array[member_index] = members_array[member_index] || [];
        members.push(member);
      };

      kinds.forEach((kind: string) => {
        const current_type_declaration = type_declarations_map[kind][index];
        const target_type = current_type_declaration.parameters.type;
        const target_members = target_type.parameters.members;

        if (target_members.length === 1) {
          const member_index = 0;
          const target_member = target_members[member_index];
          push_member(normal_members_array, member_index, target_member);
          push_member(selectable_members_array, member_index, new ObjectMember({
            owned: new FunctionDeclaration({
              name: null,
              type: new FunctionType({
                generics: [new GenericType({
                  name: select_kind_name,
                  extends: new LiteralType({value: kind}),
                })],
                return: target_member.parameters.owned.parameters.type,
              }),
            }),
          }));
        } else {
          target_members.forEach((target_member: ObjectMember, member_index: number) => {
            const target_function_declaration: FunctionDeclaration = target_member.parameters.owned;
            const target_function_type: FunctionType = target_function_declaration.parameters.type;
            if (target_function_type.parameters.parameters.length === 0) {
              push_member(selectable_members_array, member_index, new ObjectMember({
                owned: new FunctionDeclaration({
                  name: null,
                  type: new FunctionType({
                    generics: [
                      new GenericType({
                        name: select_kind_name,
                        extends: new LiteralType({value: kind}),
                      }),
                      ...target_function_type.parameters.generics,
                    ],
                    return: target_function_type.parameters.return,
                  }),
                }),
              }));
            } else {
              push_member(normal_members_array, member_index, target_member);
            }
          });
          if (index === 0) {
            root_selectable_members.push(new ObjectMember({
              owned: new FunctionDeclaration({
                name: null,
                type: new FunctionType({
                  generics: [
                    new GenericType({
                      name: select_kind_name,
                      extends: new LiteralType({value: kind}),
                    }),
                  ],
                  return: new TypedType({owned: current_type_declaration}),
                }),
              }),
            }));
          }
        }
      });

      normal_members_array.forEach((normal_members: ObjectMember[], members_index: number): void => {
        const normal_member = normal_members[0];
        const declaration_index = type_declarations_map[kinds[0]].findIndex(
          (type_declaration: TypeDeclaration) =>
            normal_member.has(type_declaration, true));
        if (non_conflict_declarations[declaration_index] !== null) {
          const cloned_normal_member = normal_member.clone(true);
          cloned_normal_member
            .parameters.owned
            .parameters.type
            .parameters.return
            .parameters.owned = non_conflict_declarations[declaration_index];
          normal_members_array[members_index] = [cloned_normal_member];
        }
      });

      selectable_members_array.forEach((selectable_members: ObjectMember[], members_index: number): void => {
        const selectable_member = selectable_members[0];
        const declaration_index = type_declarations_map[kinds[0]].findIndex(
          (type_declaration: TypeDeclaration) =>
            selectable_member.has(type_declaration, true));
        if (non_conflict_declarations[declaration_index] !== null) {
          const cloned_selectable_member = selectable_member.clone(true);
          const cloned_function_type: FunctionType = cloned_selectable_member
            .parameters.owned
            .parameters.type;
          cloned_function_type
            .parameters.return
            .parameters.return
            .parameters.owned = non_conflict_declarations[declaration_index];
          cloned_function_type
            .parameters.generics.splice(0, 1);
          selectable_members_array[members_index] = [cloned_selectable_member];
        }
      });

      const reduce_members_array = (members_array: ObjectMember[][]): ObjectMember[] =>
        members_array.reduce(
          (reduced_members: ObjectMember[], members: ObjectMember[]) =>
            [...reduced_members, ...members],
          [],
        );

      non_conflict_declaration.parameters.type = new ObjectType({members: [
        ...root_selectable_members,
        ...reduce_members_array(selectable_members_array),
        ...reduce_members_array(normal_members_array),
      ]});

      return non_conflict_declaration;
    }
  });

  const main_type = new TypeDeclaration({
    name,
    type: new TypedType({
      owned: non_conflict_declarations[0] as TypeDeclaration,
    }),
  });

  return [
    main_type,
    // tslint:disable-next-line:typedef
    ...non_conflict_declarations.filter(value => value !== null),
    ...kinds.reduce(
      (type_declarations: TypeDeclaration[], kind: string) =>
        [
          ...type_declarations,
          ...type_declarations_map[kind],
        ],
      [],
    ),
  ].map((type_declaration: TypeDeclaration): TypeDeclaration => {
    const target_type = type_declaration.parameters.type;
    if (target_type instanceof ObjectType) {
      sort_object_members(target_type.parameters.members, placeholder);
    }
    return type_declaration;
  });

};
