import {ObjectMember} from '../../elements/members/object-member';
import {Parameter} from '../../elements/parameter';
import {Type} from '../../elements/type';

const get_parameters = (object_member: ObjectMember): Parameter[] => object_member
  .parameters.owned
  .parameters.type
  .parameters.parameters;

const inner_index_of = (parameters: Parameter[], placeholder: Type): number =>
  parameters.findIndex((parameter: Parameter) => parameter.has(placeholder, true, true));

export const sort_object_members = (object_members: ObjectMember[], placeholder: any): ObjectMember[] => {
  const last_object_member = object_members.pop() as ObjectMember;

  object_members.sort((object_member_1: ObjectMember, object_member_2: ObjectMember) => {
    const parameters_1 = get_parameters(object_member_1);
    const parameters_2 = get_parameters(object_member_2);
    return (parameters_1.length !== parameters_2.length)
      ? parameters_2.length - parameters_1.length
      : (placeholder instanceof Type)
        ? inner_index_of(parameters_2, placeholder) - inner_index_of(parameters_1, placeholder)
        : 0;
  });

  object_members.push(last_object_member);

  return object_members;
};
